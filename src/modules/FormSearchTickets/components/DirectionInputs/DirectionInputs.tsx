import type React from "react"
import classes from "./directionInputs.module.css"
import iconReverse from "@assets/icons/reverse.png"
import type { ICity } from "@interface"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { getCity, setCity, swapRoutes } from "../../slice/searchTickets"
import { InputsField } from "@components"
import { useEffect } from "react"
import queryString from "query-string"
import { useLocation } from "react-router-dom"

interface IDirectionInputsProps {
  placeholder: {
    routeFrom: string
    routeTo: string
  }
  direction: {
    routeFrom: string
    routeTo: string
  }
  name: {
    routeFrom: string
    routeTo: string
  }
  options: ICity[]
  setField: (direction: string, value: ICity) => void
}

export const DirectionInputs: React.FC<IDirectionInputsProps> = ({
  placeholder,
  name,
  options,
  direction,
  setField,
}) => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const { routeFrom, routeTo } = useAppSelector(
    (state: any) => state.searchTickets,
  )
  const handlerBtnSwap = () => {
    dispatch(swapRoutes())
    const newRouteTo = routeFrom
    const newRouteFrom = routeTo
    setField(direction.routeFrom, newRouteFrom)
    setField(direction.routeTo, newRouteTo)
  }

  const handlerAutocomplete = (event: any, value: any, direction: string) => {
    if (value === null) {
      setField(direction, { _id: "", name: "" })
    }
    setField(direction, value)
    dispatch(setCity({ direction, value }))
  }

  const handlerInput = (e: any, params: any) => {
    if (params.inputProps.onChange) {
      params.inputProps.onChange(e)
    }

    if (e.target.value.trim() !== "") {
      dispatch(getCity(e.target.value))
    }
  }

  useEffect(() => {
    const parsed = queryString.parse(location.search)
    if (parsed.from_city_id) {
      const value: ICity = {
        _id: typeof parsed.from_city_id === "string" ? parsed.from_city_id : "",
        name:
          typeof parsed.routeFromName === "string" ? parsed.routeFromName : "",
      }
      dispatch(setCity({ direction: "routeFrom", value }))
      setField(direction.routeFrom, value)
    }
    if (parsed.to_city_id) {
      const value: ICity = {
        _id: typeof parsed.to_city_id === "string" ? parsed.to_city_id : "",
        name: typeof parsed.routeToName === "string" ? parsed.routeToName : "",
      }
      dispatch(setCity({ direction: "routeTo", value }))
      setField(direction.routeTo, value)
    }
  }, [])

  return (
    <div className={classes.inputs}>
      <div className={classes.input}>
        <InputsField.DirectionInput
          name={name.routeFrom}
          direction={direction.routeFrom}
          placeholder={placeholder.routeFrom}
          options={options}
          setField={setField}
          value={routeFrom}
          onChangeAutocomplete={handlerAutocomplete}
          handlerInput={handlerInput}
        />
      </div>
      <img onClick={handlerBtnSwap} src={iconReverse} alt="" />
      <div className={classes.input}>
        <InputsField.DirectionInput
          name={name.routeTo}
          direction={direction.routeTo}
          placeholder={placeholder.routeTo}
          options={options}
          setField={setField}
          value={routeTo}
          onChangeAutocomplete={handlerAutocomplete}
          handlerInput={handlerInput}
        />
      </div>
    </div>
  )
}

import type React from "react"
import classes from "./directionInputs.module.css"
import iconReverse from "@assets/icons/reverse.png"
import type { ICity } from "@interface"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { getCity, setCity, swapRoutes } from "../../slice/searchTickets"
import { InputsField } from "@components"
import { useEffect } from "react"
import queryString from "query-string"
import { useLocation, useSearchParams } from "react-router-dom"
import { decode } from "punycode"

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
  const [searchParams, setSearchParams] = useSearchParams()
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
      dispatch(setCity({ direction, value: { _id: "", name: "" } }))
    } else {
      setField(direction, value)
      dispatch(setCity({ direction, value }))
    }
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
    const routeFromCity = searchParams.get("routeFromCity") || ""
    const from_city_id = searchParams.get("from_city_id") || ""
    const routeToCity = searchParams.get("routeToCity") || ""
    const to_city_id = searchParams.get("to_city_id") || ""

    const valueFrom = {
      _id: from_city_id,
      name: routeFromCity,
    }
    console.log(valueFrom)
    const valueTo = {
      _id: to_city_id,
      name: routeToCity,
    }
    dispatch(setCity({ direction: "routeFrom", value: valueFrom }))
    setField(direction.routeFrom, valueFrom)

    dispatch(setCity({ direction: "routeTo", value: valueTo }))
    setField(direction.routeTo, valueTo)
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

import type React from "react"
import classes from "./dateInputs.module.css"
import { InputsField } from "@components"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setDate } from "../../slice/searchTickets"
import { useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import { MAIN_ROUTE } from "@pages"
import { formatDateToString } from "../../helpers/formatDateToString"

interface IDateInputsProps {
  setField: (dateName: string, value: string) => void
}

export const DateInputs: React.FC<IDateInputsProps> = ({ setField }) => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const { date_start, date_end } = useAppSelector(
    (state: any) => state.searchTickets,
  )

  const handleChange = (dateName: string, date: Date) => {
    let format = ""

    if (date) {
      format = formatDateToString(date)
    }

    setField(dateName, format)
    dispatch(setDate({ dateName, value: format }))

    if (location.pathname !== MAIN_ROUTE) {
      if (format === "") {
        searchParams.delete(dateName)
        setSearchParams(searchParams)
      } else {
        searchParams.set(dateName, format)
        setSearchParams(searchParams)
      }
    }
  }

  useEffect(() => {
    const dateStartParam = searchParams.get("date_start")
    const dateEndParam = searchParams.get("date_end")

    if (dateStartParam) {
      setField("date_start", dateStartParam)
      dispatch(setDate({ dateName: "date_start", value: dateStartParam }))
    }

    if (dateEndParam) {
      setField("date_end", dateEndParam)
      dispatch(setDate({ dateName: "date_end", value: dateEndParam }))
    }
  }, [])

  return (
    <div className={classes.inputs}>
      <div className={classes.input}>
        <InputsField.DateInput
          name="date_start"
          placeholder="ДД.ММ.ГГ"
          date={date_start}
          handleChange={data => handleChange("date_start", data)}
        />
        <span />
      </div>
      <div className={classes.input}>
        <InputsField.DateInput
          name="date_end"
          placeholder="ДД.ММ.ГГ"
          date={date_end}
          handleChange={data => handleChange("date_end", data)}
        />
        <span />
      </div>
    </div>
  )
}

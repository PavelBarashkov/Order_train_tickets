import type React from "react"
import classes from "./dateInputs.module.css"
import { InputsField } from "@components"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setDate } from "../../slice/searchTickets"
import { useEffect } from "react"
import queryString from "query-string"
import { useLocation } from "react-router-dom"

interface IDateInputsProps {
  setField: (dateName: string, value: string) => void
}

export const DateInputs: React.FC<IDateInputsProps> = ({ setField }) => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const { date_start, date_end } = useAppSelector(
    (state: any) => state.searchTickets,
  )

  const formate = (value: any) => (value < 10 ? `0${value}` : value)

  const handleChange = (dateName: string, date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const format = `${year}-${formate(month)}-${formate(day)}`

    setField(dateName, format)
    dispatch(setDate({ dateName, value: format }))
  }

  useEffect(() => {
    const parsed = queryString.parse(location.search)
    if (parsed.date_start) {
      dispatch(setDate({ dateName: "date_start", value: parsed.date_start }))
      setField("date_start", `${parsed.date_start}`)
    }
    if (parsed.date_end) {
      dispatch(setDate({ dateName: "date_end", value: parsed.date_end }))
      setField("date_start", `${parsed.date_end}`)
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

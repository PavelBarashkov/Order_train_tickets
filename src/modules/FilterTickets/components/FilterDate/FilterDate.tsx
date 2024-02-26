import type React from "react"
import classes from "./filterDate.module.css"
import { useLocation } from "react-router-dom"
import { DateInput } from "./DateInput/DateInput"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setDate } from "../../../FormSearchTickets/slice/searchTickets"
import type { RootState } from "../../../../app/store"
import { useEffect } from "react"

export const FilterDate: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { date_start, date_end } = useAppSelector(
    (state: RootState) => state.searchTickets,
  )

  const formate = (value: any) => (value < 10 ? `0${value}` : value)

  const handleChange = (dateName: string, date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const format = `${year}-${formate(month)}-${formate(day)}`

    dispatch(setDate({ dateName, value: format }))
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set("date_start", date_start)
    searchParams.set("date_end", date_end)

    const newSearch = `?${searchParams.toString()}`
    window.history.replaceState(null, "", `${location.pathname}${newSearch}`)
  }, [date_start, date_end, location.search])

  return (
    <div className={classes.filterDate}>
      <div className={classes.filterDateInputs}>
        <div className={classes.filterDateInput}>
          <label htmlFor="nowDate" className={classes.filterDateInputLabel}>
            Дата поездки
          </label>
          <DateInput
            name={"date_start"}
            date={date_start}
            handleChange={(data: any) => handleChange("date_start", data)}
          />
          <span />
        </div>
        <div className={classes.filterDateInput}>
          <label className={classes.filterDateInputLabel}>
            Дата возвращения
          </label>
          <DateInput
            name={"date_end"}
            date={date_end}
            handleChange={(data: any) => handleChange("date_end", data)}
          />
          <span />
        </div>
      </div>
    </div>
  )
}

import type React from "react"
import classes from "./filterDate.module.css"
import { DateInput } from "./DateInput/DateInput"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { setDate } from "../../../FormSearchTickets/slice/searchTickets"
import type { RootState } from "../../../../app/store"

export const FilterDate: React.FC = () => {
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

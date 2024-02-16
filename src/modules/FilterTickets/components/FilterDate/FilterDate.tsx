import type React from "react"
import classes from "./filterDate.module.css"
import { InputsField } from "@components"
import { useState } from "react"

export const FilterDate: React.FC = () => {
  const [startDate, setStartDate] = useState(undefined) // Todo тут будет функции из store
  const [willDate, setWillDate] = useState(undefined)
  return (
    <div className={classes.filterDate}>
        <div className={classes.filterDateInputs}>
          <div className={classes.filterDateInput}>
            <label htmlFor="nowDate" className={classes.filterDateInputLabel}>
              Дата поездки
            </label>
            <InputsField.DateInput
              date={startDate}
              setDate={setStartDate}
              name="nowDate"
              placeholder="ДД.ММ.ГГ"
            />
            <span />
          </div>
          <div className={classes.filterDateInput}>
            <label className={classes.filterDateInputLabel}>
              Дата возвращения
            </label>
            <InputsField.DateInput
              date={willDate}
              setDate={setWillDate}
              name="willDate"
              placeholder="ДД.ММ.ГГ"
            />
            <span />
          </div>
        </div>
    </div>
  )
}

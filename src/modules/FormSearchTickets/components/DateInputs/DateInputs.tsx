import type React from "react"
import classes from "./dateInputs.module.css"
import { InputsField } from "@components"
import { useState } from "react"

export const DateInputs: React.FC = () => {
  const [startDate, setStartDate] = useState(undefined) // Todo тут будет функции из store
  const [willDate, setWillDate] = useState(undefined)

  return (
    <div className={classes.inputs}>
      <div className={classes.input}>
        <InputsField.DateInput
          name="nowDate"
          placeholder="ДД.ММ.ГГ"
          date={startDate}
          setDate={setStartDate}
          label="Дата"
        />
        <span />
      </div>
      <div className={classes.input}>
        <InputsField.DateInput
          name="willDate"
          placeholder="ДД.ММ.ГГ"
          date={willDate}
          setDate={setWillDate}
        />
        <span />
      </div>
    </div>
  )
}

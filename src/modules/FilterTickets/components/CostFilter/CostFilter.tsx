import type React from "react"
import { InputsField } from "@components"
import classes from "./costFilter.module.css"

export const CostFilter: React.FC = () => {
  return (
    <div className={classes.costFilter}>
      <label htmlFor="nowDate" className={classes.costFilterInputLabel}>
        Стоимость
      </label>
      <InputsField.RangeInput
        name="cost"
        placeholder=""
        max={5000}
        min={1000}
        step={250}
        typeInput="cost"
      />
    </div>
  )
}

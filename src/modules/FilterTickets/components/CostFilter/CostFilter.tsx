import type React from "react"
import classes from "./costFilter.module.css"
import { CostRange } from "./CostRange/CostRange"

export const CostFilter: React.FC = () => {
  return (
    <div className={classes.costFilter}>
      <label htmlFor="nowDate" className={classes.costFilterInputLabel}>
        Стоимость
      </label>
      <CostRange max={10000} min={1000}/>
    </div>
  )
}

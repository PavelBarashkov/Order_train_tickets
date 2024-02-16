import type React from "react"
import classes from "./timeFilter.module.css"
import { To } from "./To/To"
import { Back } from "./Back/Back"

export const TimeFilter: React.FC = () => {
  return (
    <div className={classes.timeFilter}>
      <To />
      <Back />
    </div>
  )
}

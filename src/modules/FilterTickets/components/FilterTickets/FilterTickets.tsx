import type React from "react"
import classes from "./filterTickets.module.css"
import { FilterDate } from "../FilterDate"
import { OptionsList } from "../OptionsList"
import { CostFilter } from "../CostFilter"
import { TimeFilter } from "../TimeFilter"

export const FilterTickets: React.FC = () => {
  return (
    <div className={classes.FilterTickets}>
      <>
        <FilterDate />
        <OptionsList />
        <CostFilter />
        <TimeFilter />
      </>
    </div>
  )
}

import type React from "react"
import classes from "./filterTickets.module.css"
import { FilterDate } from "../FilterDate"
import { Formik } from "formik"
import { OptionsList } from "../OptionsList"
import { CostFilter } from "../CostFilter"
import { TimeFilter } from "../TimeFilter"

export const FilterTickets: React.FC = () => {
  return (
    <div className={classes.FilterTickets}>
      <Formik
        initialValues={{
          nowDate: "",
          willDate: "",
          cost: 0,
        }}
        onSubmit={() => {}}
      >
        <>
          <FilterDate />
          <OptionsList />
          <CostFilter />
          <TimeFilter />
        </>
      </Formik>
    </div>
  )
}

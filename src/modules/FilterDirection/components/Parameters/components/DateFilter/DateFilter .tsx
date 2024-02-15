import React, { useState } from "react"
import classes from "./dataFilter.module.css"
import DatePicker from "react-datepicker"
import ru from "date-fns/locale/ru"
import "react-datepicker/dist/react-datepicker.css"
import { MyInput } from "../../../../../../components/UI/MyInput/MyInput"

export const DateFilter = () => {
  const [startDate, setStartDate] = useState(undefined)
  const [willDate, setWillDate] = useState(undefined)

  return (
    <div className={classes.date_filter__fieldset}>
      <div className={classes.date_filter__control}>
        <label className="date-filter__title">
          Дата поездки
          <DatePicker
            locale={ru}
            dateFormat="dd/MM/yy"
            selected={startDate}
            // customInput={<MyInput/>}
            onChange={(date: any) => setStartDate(date)}
          />
        </label>
      </div>
    </div>
  )
}

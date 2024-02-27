import type React from "react"
import classes from "./dateInput.module.css"
import DatePicker from "react-datepicker"
import ru from "date-fns/locale/ru"
import "react-datepicker/dist/react-datepicker.css"


export const DateInput: React.FC<any> = ({ date, handleChange, name }) => {
  return (
    <div>
      <DatePicker
      name={name}
        locale={ru}
        placeholderText="ДД/ММ/ГГ"
        selected={date}
        dateFormat="dd/MM/yy"
        onChange={(date: Date) => {
          handleChange(date)
        }}
        customInput={<input className={classes.input} />}
      />
    </div>
  )
}

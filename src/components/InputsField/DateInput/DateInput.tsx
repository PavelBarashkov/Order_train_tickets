import type React from "react"
import classes from "./dateInput.module.css"
import type { InputProps } from "../Interface/InputProps"
import { useField } from "formik"
import DatePicker from "react-datepicker"
import ru from "date-fns/locale/ru"
import "react-datepicker/dist/react-datepicker.css"

interface DateInputProps extends InputProps {
  date: Date
  handleChange: (date: Date) => void
}

export const DateInput: React.FC<DateInputProps> = ({
  date,
  handleChange,
  ...props
}) => {
  const [filed] = useField(props)

  return (
    <div>
      <DatePicker
        locale={ru}
        placeholderText="ДД/ММ/ГГ"
        selected={date}
        dateFormat="dd/MM/yy"
        onChange={(date: Date) => {
          handleChange(date)
        }}
        customInput={<input className={classes.input} {...filed} />}
      />
    </div>
  )
}

import type React from "react"
import classes from "./dateInput.module.css"
import type { InputProps } from "../Interface/InputProps"
import { useField } from "formik"
import DatePicker from "react-datepicker"
import ru from "date-fns/locale/ru"
import type { SetStateAction } from "react"
import "react-datepicker/dist/react-datepicker.css"

interface DateInputProps extends InputProps {
  date: Date | null | undefined
  setDate: (e: SetStateAction<undefined>) => void
}

export const DateInput: React.FC<DateInputProps> = ({
  label,
  date,
  setDate,
  ...props
}) => {
  const [filed, meta] = useField(props)

  return (
    <div>
      {label && (
        <label className={classes.inputLabel} htmlFor={props.id || props.name}>
          {label}
        </label>
      )}
      <DatePicker
        locale={ru}
        placeholderText="ДД/ММ/ГГ"
        selected={date}
        dateFormat="dd/MM/yy"
        onChange={(date: any) => setDate(date)}
        customInput={<input className={classes.input} {...filed} {...meta} />}
      />
      {meta.touched && meta.error ? (
        <div className={classes.inputError}>{meta.error}</div>
      ) : null}
    </div>
  )
}

import type React from "react"
import classes from "./textInput.module.css"
import { useField } from "formik"
import { MyInput } from "../../UI"
import type { InputProps } from "../Interface/InputProps"

export const TextInput: React.FC<InputProps> = ({ label, handler, ...props }) => {
  const [field, meta] = useField(props)
  console.log(meta)
  return (
    <div>
      {label && (
        <label className={classes.inputLabel} htmlFor={props.id || props.name}>
          {label}
        </label>
      )}
      <MyInput {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={classes.inputError}>jib,rf</div>
      ) : null}
    </div>
  )
}






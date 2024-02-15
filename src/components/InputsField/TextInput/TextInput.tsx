import type React from "react"
import classes from "./textInput.module.css"
import { useField } from "formik"
import { MyInput } from "../../UI"
import type { InputProps } from "../Interface/InputProps"

export const TextInput: React.FC<InputProps> = ({ label, ...props }) => {
  const [filed, meta] = useField(props)

  return (
    <div>
      {label && (
        <label className={classes.inputLabel} htmlFor={props.id || props.name}>
          {label}
        </label>
      )}
      <MyInput {...filed} {...props} />
      {meta.touched && meta.error ? (
        <div className={classes.inputError}>{meta.error}</div>
      ) : null}
    </div>
  )
}

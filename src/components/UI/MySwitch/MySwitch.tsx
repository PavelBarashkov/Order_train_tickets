import type React from "react"
import classes from "./mySwitch.module.css"
import type { InputHTMLAttributes } from "react"

export const MySwitch: React.FC<
  InputHTMLAttributes<HTMLInputElement>
> = props => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" {...props} />
      <span className={`${classes.slider} ${classes.round}`}></span>
    </label>
  )
}

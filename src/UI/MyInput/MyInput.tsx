import type { InputHTMLAttributes } from "react"
import classes from "./myInput.module.css"

export const MyInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={classes.myInput} {...props} />
}

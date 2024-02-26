import type React from "react"
import classes from "./btnSubmit.module.css"

export const BtnSubmit: React.FC = (...props) => {
  return (
    <button {...props} className={classes.btn} type="submit">
      НАЙТИ БИЛЕТЫ
    </button>
  )
}

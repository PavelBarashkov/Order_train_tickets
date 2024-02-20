import type React from "react"
import classes from "./headerTicket.module.css"
import iconTo from "@assets/icons/ToTrain.png"

export const HeaderTicket: React.FC = () => {
  return (
    <div className={classes.header}>
      <div className={classes.headerIconDirection}>
        <img src={iconTo} alt="" />
      </div>
      <button className={classes.btn}>Выбрать другой поезд</button>
    </div>
  )
}

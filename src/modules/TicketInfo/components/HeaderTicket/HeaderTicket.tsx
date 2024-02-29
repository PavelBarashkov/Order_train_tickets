import type React from "react"
import classes from "./headerTicket.module.css"
import iconTo from "@assets/icons/ToTrain.png"
import { useNavigate } from "react-router-dom"

export const HeaderTicket: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className={classes.header}>
      <div className={classes.headerIconDirection}>
        <img src={iconTo} alt="" />
      </div>
      <button onClick={() => navigate(-1)} className={classes.btn}>Выбрать другой поезд</button>
    </div>
  )
}

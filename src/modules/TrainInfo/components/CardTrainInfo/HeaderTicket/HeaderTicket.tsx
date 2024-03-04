import type React from "react"
import classes from "./headerTicket.module.css"
import iconFrom from "@assets/icons/ToTrain.png"
import iconTo from "@assets/icons/directionTo.png"

import { useNavigate } from "react-router-dom"

interface IHeaderTicketProps {
  direction: string
}

export const HeaderTicket: React.FC<IHeaderTicketProps> = ({ direction }) => {
  const navigate = useNavigate()
  return (
    <div
      className={`${direction === "from" ? classes.header : classes.headerTo}`}
    >
      <div className={classes.headerIconDirection}>
        {direction === "from" ? (
          <img src={iconFrom} alt="From" />
        ) : (
          <img src={iconTo} alt="to" />
        )}
      </div>
      <button onClick={() => navigate(-1)} className={classes.btn}>
        Выбрать другой поезд
      </button>
    </div>
  )
}

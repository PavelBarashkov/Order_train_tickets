import type React from "react"
import classes from "./headerTicket.module.css"
import iconFrom from "@assets/icons/ToTrain.png"
import iconTo from "@assets/icons/directionTo.png"

import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../../../app/hooks"
import { clearSelected } from "../../../slice/trainInfoSlice"

interface IHeaderTicketProps {
  direction: string
}

export const HeaderTicket: React.FC<IHeaderTicketProps> = ({ direction }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handelBtnPrev = () => {
    navigate(-1)
    localStorage.clear()
    dispatch(clearSelected())
  }

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
      <button onClick={handelBtnPrev} className={classes.btn}>
        Выбрать другой поезд
      </button>
    </div>
  )
}

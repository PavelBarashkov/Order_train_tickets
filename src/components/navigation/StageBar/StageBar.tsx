import type React from "react"
import classes from "./stageBar.module.css"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { TICKET_ROUTE } from "../../../pages"
import {
  CONFIRMATION_ORDER_ROUTE,
  PASSENGER_ROUTER,
  PAYMENT_ORDER_ROUTE,
} from "../../../pages/helpers/const/const"

export const StageBar: React.FC = () => {
  const location = useLocation()
  const [stage, setStage] = useState(1)
  const stages = ["Билеты", "Пассажиры", "Оплата", "Проверка"]
  const active = stage - 1

  useEffect(() => {
    switch (location.pathname) {
      case `/${TICKET_ROUTE}`:
        setStage(1)
        break
      case `/${PASSENGER_ROUTER}`:
        setStage(2)
        break
      case `/${PAYMENT_ORDER_ROUTE}`:
        setStage(3)
        break
      case `/${CONFIRMATION_ORDER_ROUTE}`:
        setStage(4)
        console.log(CONFIRMATION_ORDER_ROUTE)
        break
    }
  }, [location.pathname])

  return (
    <div
      className={
        classes.stageBar && stage === 4
          ? classes.stageBar_yellow
          : classes.stageBar_gray
      }
    >
      <ul className={`${classes.stageBar_list} ${classes.stages_wrapper}`}>
        {stages.map((el, index) => (
          <li
            className={`
              ${classes.stageBar_list_item} 
              ${stage > index ? classes.passed : "not_passed"}
              ${active === index ? classes.active : ""}
            `}
            key={el}
          >
            <span className={classes.stageBar_list_icon}>
              <span className={classes.stageBar_list_stage}>{index + 1}</span>
            </span>

            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}

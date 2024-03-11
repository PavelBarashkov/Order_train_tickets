import type React from "react"
import classes from "./asideBar.module.css"
import { ContainerForDirection } from "./ContainerForDirection/ContainerForDirection"
import to from "@assets/icons/to.png"
import revers from "@assets/icons/Subtract (2).png"
import Vector1 from "@assets/icons/Vector (2).png"
import Vector2 from "@assets/icons/Vector (3).png"
import { ContainerForPassengerInfo } from "./ContainerForPassengerInfo/ContainerForPassengerInfo"
import { TotalPrice } from "./TotalPrice"

export const AsideBar: React.FC = () => {
  const ticketFromLocalStorage = localStorage.getItem("train_info")
  const ticket = ticketFromLocalStorage
    ? JSON.parse(ticketFromLocalStorage)
    : {}

  const { departure } = ticket
  const { arrival } = ticket

  return (
    <div className={classes.asideBar}>
      <h4 className={classes.asideBarHeaderTitle}>Детали поездки</h4>
      <ContainerForDirection
        iconDirection={to}
        iconDirectionSub={Vector1}
        title="Туда"
        ticket={departure}
      />
      <ContainerForDirection
        iconDirection={revers}
        iconDirectionSub={Vector1}
        title="Обратон"
        ticket={arrival}
      />
      <TotalPrice/>
      {/* <ContainerForPassengerInfo /> */}
    </div>
  )
}

import type React from "react"
import classes from './ticketInfo.module.css'
import { HeaderTicket } from "../HeaderTicket"
import { DirectionInfo } from "../DirectionInfo"
import { NumberOfTickets } from "../NumberOfTickets"
import { TypeCoach } from "../TypeCoach"

export const TicketInfo: React.FC = () => {
  return (
    <>
      <div className={classes.title} >Выбор мест</div>
      <div className={classes.card}>
        <HeaderTicket />
        <DirectionInfo/>
        <NumberOfTickets/>
        <TypeCoach/>
      </div>
    </>
  )
}

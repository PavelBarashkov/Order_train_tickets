import type React from "react"
import classes from "./ticketInfo.module.css"
import { HeaderTicket } from "../HeaderTicket"
import { DirectionInfo } from "../DirectionInfo"
import { NumberOfTickets } from "../NumberOfTickets"
import { TypeCoach } from "../TypeCoach"
import { CardTicket } from "../CardTicket/CardTicket"
import { useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"

export const TicketInfo: React.FC = () => {
  // TODO Сделать компонет билета, прнимает (направление, инфу о билете, инфу овогонах)

  const { ticket } = useAppSelector((state: RootState) => state.trainInfo)
  const { departure } = ticket
  const { arrival } = ticket

  return (
    <>
      <div className={classes.title}>Выбор мест</div>

      <div className={classes.TicketInfoList}>
        <CardTicket direction="from" ticketInfo={departure}/>

        {ticket.arrival && <CardTicket direction="to" ticketInfo={arrival}/>}
      </div>

      {/* <div className={classes.card}>
        <HeaderTicket />
        <DirectionInfo />
        <NumberOfTickets />
        <TypeCoach />
      </div> */}
    </>
  )
}

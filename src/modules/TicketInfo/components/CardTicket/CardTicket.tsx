import type React from "react"
import classes from "./cardTicket.module.css"
import { HeaderTicket } from "../HeaderTicket"
import { DirectionInfo } from "../DirectionInfo"
import type { ITrainInfo } from "../../../../interface"
import { InfoPricing } from "../../../../components/Ticket/CardTicket/InfoPricing"
import { NumberOfTickets } from "../NumberOfTickets"
import { TypeCoach } from "../TypeCoach"

interface ICardTicketProps {
  direction: string
  ticketInfo: ITrainInfo
}

export const CardTicket: React.FC<ICardTicketProps> = ({
  direction,
  ticketInfo,
}) => {
  // TODO рефакторинг компонента с инфой о вагоне
  return (
    <div className={classes.cardTicket}>
      <HeaderTicket direction={direction} />
      <DirectionInfo direction={direction} ticketInfo={ticketInfo} />
      <NumberOfTickets />
      <TypeCoach ticketInfo={ticketInfo}/>
    </div>
  )
}

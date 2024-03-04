import type React from "react"
import classes from "./cardTicket.module.css"
import { HeaderTicket } from "../HeaderTicket"
import { DirectionInfo } from "../DirectionInfo"
import type { ITrainInfo } from "../../../../interface"
import { NumberOfTickets } from "../NumberOfTickets"
import { TypeCoach } from "../TypeCoach"

interface ICardTicketProps {
  direction: string
  ticketInfo: ITrainInfo
  coachList: any
}

export const CardTicket: React.FC<ICardTicketProps> = ({
  direction,
  ticketInfo,
  coachList,
}) => {
  // TODO рефакторинг компонента с инфой о вагоне
  return (
    <div className={classes.cardTicket}>
      <HeaderTicket direction={direction} />
      <DirectionInfo direction={direction} ticketInfo={ticketInfo} />
      <NumberOfTickets />
      <TypeCoach
        direction={direction}
        ticketInfo={ticketInfo}
        coachList={coachList}
      />
    </div>
  )
}

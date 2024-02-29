import type React from "react"
import classes from "./cardTicket.module.css"
import { HeaderTicket } from "../HeaderTicket"
import { DirectionInfo } from "../DirectionInfo"
import type { ITrainInfo } from "../../../../interface"

interface ICardTicketProps {
  direction: string
  ticketInfo: ITrainInfo
}

export const CardTicket: React.FC<ICardTicketProps> = ({ direction, ticketInfo }) => {
  return (
    <div className={classes.cardTicket}>
        <HeaderTicket direction={direction}/>
        <DirectionInfo direction={direction} ticketInfo={ticketInfo}/>
    </div>
    )
}

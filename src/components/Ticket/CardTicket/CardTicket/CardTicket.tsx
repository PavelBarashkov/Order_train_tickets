import type React from "react"
import { CardTicketContainer } from "../../../../layouts"
import { InfoTrain } from "../InfoTrain"
import { InfoDirection } from "../InfoDirection"
import { InfoPricing } from "../InfoPricing"

export const CardTicket: React.FC<any> = ({ticket}) => {
  return (
    <CardTicketContainer
      trainInfo={<InfoTrain ticket={ticket}/>}
      directionInfo={<InfoDirection ticket={ticket}/>}
      priceInfo={<InfoPricing />}
    />
  )
}

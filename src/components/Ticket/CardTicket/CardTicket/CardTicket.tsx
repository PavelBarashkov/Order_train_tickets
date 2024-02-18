import type React from "react"
import { CardTicketContainer } from "../../../../layouts"
import { InfoTrain } from "../InfoTrain"
import { InfoDirection } from "../InfoDirection"
import { InfoPricing } from "../InfoPricing"

export const CardTicket: React.FC = () => {
  return (
    <CardTicketContainer
      trainInfo={<InfoTrain />}
      directionInfo={<InfoDirection />}
      priceInfo={<InfoPricing />}
    />
  )
}

import type React from "react"
import classes from "./cardTicketContainer.module.css"

interface CardTicketContainer {
  trainInfo: React.ReactNode
  directionInfo: React.ReactNode
  priceInfo: React.ReactNode
}

export const CardTicketContainer: React.FC<CardTicketContainer> = ({
  trainInfo,
  directionInfo,
  priceInfo,
}) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardTrainInfo}>{trainInfo}</div>
      <div className={classes.cardDirectionInfo}>{directionInfo}</div>
      <div className={classes.cardPriceInfo}>{priceInfo}</div>
    </div>
  )
}

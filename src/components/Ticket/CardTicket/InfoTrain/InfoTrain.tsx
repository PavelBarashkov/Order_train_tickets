import type React from "react"
import classes from "./infoTrain.module.css"
import iconArrow from "@assets/icons/Arrow.png"
import iconTrain from "@assets/icons/iconTrain.png"

export const InfoTrain: React.FC<any> = ({ ticket }) => {
  return (
    <div className={classes.trainInfo}>
      <img className={classes.trainInfoImg} src={iconTrain} alt="" />
      <div className={classes.trainInfoNumber}>
        {ticket.departure.train.name}
      </div>
      <div className={classes.trainInfoDirection}>
        <div className={classes.trainInfoDirectionItemCity}>
          <p>{ticket.departure.from.city.name}</p>{" "}
          <img src={iconArrow} alt="" />
        </div>
        <p>{ticket.departure.to.city.name}</p>
      </div>
    </div>
  )
}

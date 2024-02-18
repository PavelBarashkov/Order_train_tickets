import type React from "react"
import classes from "./infoTrain.module.css"
import iconArrow from "@assets/icons/Arrow.png"
import iconTrain from "@assets/icons/iconTrain.png"

export const InfoTrain: React.FC = () => {
  return (
    <div className={classes.trainInfo}>
      <img className={classes.trainInfoImg} src={iconTrain} alt="" />
      <div className={classes.trainInfoNumber}>C192</div>
      <div className={classes.trainInfoDirection}>
        <div className={classes.trainInfoDirectionItemCity}>
          <p className={classes.trainInfoDirectionFromCity}>Адлер</p>
          <img src={iconArrow} alt="" />
        </div>
        <div className={classes.trainInfoDirectionItemCity}>
          <p>Москва</p> <img src={iconArrow} alt="" />
        </div>
        <p>Санкт-Петербург</p>
      </div>
    </div>
  )
}

import type React from "react"
import classes from "./containerForPassengerInfo.module.css"
import passangerIcon from "@assets/icons/passanger.png"
import { useState } from "react"

export const ContainerForPassengerInfo: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(true)

  const handlerBtn = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={classes.container}>
      <div className={classes.containerPreview}>
        <div className={classes.containerPreviewDirection}>
          <img src={passangerIcon} alt="" />
          <div className={classes.containerPreviewDirectionTitle}>
            Пассажиры
          </div>
        </div>
        <button
          onClick={handlerBtn}
          className={classes.containerPreviewBtn}
        ></button>
      </div>
      <div className={`${classes.containerInfo} ${isShow ? classes.active : null}`}></div>
    </div>
  )
}

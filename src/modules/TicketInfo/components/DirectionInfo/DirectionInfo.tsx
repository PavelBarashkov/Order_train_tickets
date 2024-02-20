import type React from "react"
import classes from "./directionInfo.module.css"
import iconTrain from "@assets/icons/IconTrainActive.png"
import iconTo from "@assets/icons/Vector (2).png"
import iconTime from "@assets/icons/Group (13).png"

export const DirectionInfo: React.FC = () => {
  return (
    <div className={classes.directionInfo}>
      <div className={classes.trainInfo}>
        <img src={iconTrain} alt="" />
        <div className={classes.trainInfoMain}>
          <div className={classes.trainInfoNumber}>116C</div>
          <div className={classes.trainInfoDirection}>
            <div className={classes.trainInfoSub}>Адлер &#8594;</div>
            <div>Москва &#8594;</div>
            <div> Санкт-Петербург</div>
          </div>
        </div>
      </div>

      <CityInfo info={data} />

      <div>
        <img src={iconTo} alt="" />
      </div>

      <CityInfo info={data} />

      <div className={classes.timeInfo}>
        <img src={iconTime} alt="" />
        <div>
          <div>9 часов</div>
          <div>42 минуты</div>
        </div>
      </div>
    </div>
  )
}

const CityInfo = ({ info }: any) => {
  return (
    <div className={classes.cityInfo}>
      <div className={classes.cityInfoTime}>{info.time}</div>
      <div className={classes.cityInfoName}>{info.city}</div>
      <div className={classes.trainInfoSub}>{info.trainStation}</div>
    </div>
  )
}

const data = {
  time: "10:00",
  city: "Москва",
  trainStation: "Курский вокзал",
}

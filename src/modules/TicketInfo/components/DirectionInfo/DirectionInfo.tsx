import type React from "react"
import classes from "./directionInfo.module.css"
import iconTrain from "@assets/icons/IconTrainActive.png"
import iconTo from "@assets/icons/Vector (2).png"
import iconTime from "@assets/icons/Group (13).png"
import { useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import moment from "moment"
import type { ITrainInfo } from "../../../../interface"

interface IDirectionInfoProps {
  ticketInfo: ITrainInfo
  direction: string
}

export const DirectionInfo: React.FC<IDirectionInfoProps> = ({
  ticketInfo,
  direction,
}) => {
  // TODO Рефакторинг стилей
  const { ticket } = useAppSelector((state: RootState) => state.trainInfo)
  return (
    <div className={classes.directionInfo}>
      <div className={classes.trainInfo}>
        <img src={iconTrain} alt="" />
        <div className={classes.trainInfoMain}>
          <div className={classes.trainInfoNumber}>{ticketInfo.train.name}</div>
          <div className={classes.trainInfoDirection}>
            <div>{ticketInfo.from.city.name} &#8594;</div>
            <div>{ticketInfo.to.city.name}</div>
          </div>
        </div>
      </div>

      <div className={classes.cityInfo}>
        <div className={classes.cityInfoTime}>
          {moment
            .unix(
              direction === "from"
                ? ticketInfo.from.datetime
                : ticketInfo.to.datetime,
            )
            .utc()
            .format("HH:mm")}
        </div>
        <div className={classes.cityInfoName}>
          {direction === "from"
            ? ticketInfo.from.city.name
            : ticketInfo.to.city.name}
        </div>
        <div className={classes.trainInfoSub}>
          {direction === "from"
            ? ticketInfo.from.railway_station_name
            : ticketInfo.to.railway_station_name}
        </div>
      </div>

      <div>
        {direction === "from" ? (
          <img src={iconTo} alt="" />
        ) : (
          <img style={{ rotate: "180deg" }} src={iconTo} alt="" />
        )}
      </div>

      <div className={classes.cityInfo}>
        <div className={classes.cityInfoTime}>
          {moment
            .unix(
              direction === "from"
                ? ticketInfo.to.datetime
                : ticketInfo.from.datetime,
            )
            .utc()
            .format("HH:mm")}
        </div>
        <div className={classes.cityInfoName}>
          {direction === "from"
            ? ticketInfo.to.city.name
            : ticketInfo.from.city.name}
        </div>
        <div className={classes.trainInfoSub}>
          {direction === "from"
            ? ticketInfo.to.railway_station_name
            : ticketInfo.from.railway_station_name}
        </div>
      </div>

      <div className={classes.timeInfo}>
        <img src={iconTime} alt="" />
        <div>
          <div>{moment.unix(ticketInfo.duration).utc().format("H")} Ч</div>
          <div>
            {moment.unix(ticket.departure.duration).utc().format("m")} Mин
          </div>
        </div>
      </div>
    </div>
  )
}

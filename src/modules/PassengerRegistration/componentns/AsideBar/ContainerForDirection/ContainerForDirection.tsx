import type React from "react"
import classes from "./containerForDirection.module.css"
import { useState } from "react"
import moment from "moment"

interface ContainerForDirectionProps {
  iconDirection: string
  title: string
  ticket: any
  iconDirectionSub: string
}

export const ContainerForDirection: React.FC<ContainerForDirectionProps> = ({
  iconDirection,
  title,
  ticket,
  iconDirectionSub,
}) => {
  const [isShow, setIsShow] = useState<boolean>(true)

  const handlerBtn = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={classes.container}>
      <div className={classes.containerPreview}>
        <div className={classes.containerPreviewDirection}>
          <img src={iconDirection} alt="" />
          <div className={classes.containerPreviewDirectionTitle}>
            {title}
            <span>
              {" "}
              {moment.unix(ticket.from.datetime).utc().format("DD.MM.YYYY")}
            </span>
          </div>
        </div>
        <button
          onClick={handlerBtn}
          className={classes.containerPreviewBtn}
        ></button>
      </div>

      <div
        className={`${classes.containerInfo} ${isShow ? classes.active : null}`}
      >
        <div className={classes.info}>
          <div className={classes.infoTitle}>№ Поезда</div>
          <div className={classes.infoTitleTrain}>{ticket.train.name}</div>
        </div>

        <div className={classes.info}>
          <div className={classes.infoTitle}>Название</div>
          <div style={{ textAlign: "end", color: "#ffff" }}>
            {" "}
            {ticket.from.city.name}
            <br />
            {ticket.to.city.name}
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div className={classes.info}>
            <div>
              <div className={classes.infoTime}>
                {moment.unix(ticket.from.datetime).utc().format("HH:mm")}
              </div>
              <div className={classes.infoSub}>
                {" "}
                {moment.unix(ticket.from.datetime).utc().format("DD.MM.YYYY")}
              </div>
            </div>

            <div>
              <div>{moment.unix(ticket.duration).utc().format("HH:mm")}</div>
              <img src={iconDirectionSub} alt="" />
            </div>

            <div>
              <div className={classes.infoTime}>
                {moment.unix(ticket.to.datetime).utc().format("hh:mm")}
              </div>
              <div className={classes.infoSub}>
                {moment.unix(ticket.to.datetime).utc().format("DD.MM.YYYY")}
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 20 }}>
          <div className={classes.info}>
            <div>
              <div style={{ color: "#ffff" }}>{ticket.from.city.name}</div>
              <div className={classes.infoSub}>
                {" "}
                {ticket.from.railway_station_name}
                <br />
                вокзал
              </div>
            </div>

            <div>
              <div>{ticket.to.city.name}</div>
              <div className={classes.infoSub}>
                {ticket.to.railway_station_name}
                <br />
                вокзал
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

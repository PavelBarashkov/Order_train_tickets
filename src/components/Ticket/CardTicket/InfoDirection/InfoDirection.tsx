import type React from "react"
import classes from "./infoDirection.module.css"
import iconTo from "@assets/icons/Vector (2).png"
import iconFrom from "@assets/icons/Vector (3).png"
import moment from "moment"

export const InfoDirection: React.FC<any> = ({ ticket }) => {
  return (
    <div className={classes.directionInfo}>
      <div className={classes.directionInfoItem}>
        <div className={classes.directionInfoAboutCity}>
          <div className={classes.directionInfoTime}>
            {moment.unix(ticket.departure.from.datetime).utc().format("HH:mm")}
          </div>
          <div className={classes.directionInfoCity}>
            {ticket.departure.from.city.name}
          </div>
          <div className={classes.directionInfoRailwayStation}>
            {ticket.departure.from.railway_station_name} вокзал
          </div>
        </div>
        <div>
          <div className={classes.timeDirection}>
            {moment.unix(ticket.departure.duration).utc().format("HH:mm")}
          </div>
          <img src={iconTo} alt="" />
        </div>
        <div className={classes.directionInfoAboutCity}>
          <div className={classes.directionInfoTime}>
            {moment.unix(ticket.departure.to.datetime).utc().format("HH:mm")}
          </div>
          <div className={classes.directionInfoCity}>
            {ticket.departure.to.city.name}
          </div>
          <div className={classes.directionInfoRailwayStation}>
            {ticket.departure.to.railway_station_name} вокзал
          </div>
        </div>
      </div>
      {/*  тут будет условия его появления */}

      {ticket.arrival && (
        <div className={classes.directionInfoItem}>
          <div className={classes.directionInfoAboutCity}>
            <div className={classes.directionInfoTime}>
              {moment.unix(ticket.arrival.to.datetime).utc().format("HH:mm")}
            </div>
            <div className={classes.directionInfoCity}>
              {ticket.arrival.to.city.name}
            </div>
            <div className={classes.directionInfoRailwayStation}>
              {ticket.arrival.to.railway_station_name} вокзал
            </div>
          </div>
          <div>
            <div className={classes.timeDirection}>
              {moment.unix(ticket.arrival.duration).utc().format("HH:mm")}
            </div>
            <img src={iconFrom} alt="" />
          </div>
          <div className={classes.directionInfoAboutCity}>
            <div className={classes.directionInfoTime}>
              {moment.unix(ticket.arrival.from.datetime).utc().format("HH:mm")}
            </div>
            <div className={classes.directionInfoCity}>
              {ticket.arrival.from.city.name}
            </div>
            <div className={classes.directionInfoRailwayStation}>
              {ticket.arrival.from.railway_station_name} вокзал
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

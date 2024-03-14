import type React from "react"
import classes from "./lastTicketItem.module.css"

import express from "@assets/icons/express.png"
import wifi from "@assets/icons/wifi.png"
import { Svg } from "@assets"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../../app/hooks"
import { TRAIN_INFO_ROUTER } from "../../../../pages"
import { setTicket } from "../../../TrainInfo/slice/trainInfoSlice"

export const LastTicketItem: React.FC<any> = ({ ticket }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleBtn = () => {
    navigate(`/${TRAIN_INFO_ROUTER}`)
    dispatch(setTicket(ticket))
    localStorage.setItem("train_info", JSON.stringify(ticket))
  }
  return (
    <div className={classes.last_ticket} onClick={handleBtn}>
      <div className={classes.last_ticket_header}>
        <div className={classes.last_ticket_title_from}>
          <h4 className={classes.last_ticket_title}>
            {ticket.departure.from.city.name}
          </h4>

          <span className={classes.last_ticket_subtitle}>
            {ticket.departure.from.railway_station_name}
            <br />
            вокзал
          </span>
        </div>

        <div className={classes.last_ticket_title_to}>
          <h4 className={classes.last_ticket_title}>
            {ticket.departure.to.city.name}
          </h4>

          <span className={classes.last_ticket_subtitle}>
            {ticket.departure.to.railway_station_name}
            <br />
            вокзал
          </span>
        </div>
      </div>

      <div className={classes.last_ticket_info}>
        <div className={classes.last_ticket_options}>
          {ticket.departure.have_wifi && <img src={wifi} alt="wi-fi" />}

          {ticket.departure.is_express && <img src={express} alt="express" />}

          <Svg.Food />
        </div>

        <div className={classes.last_ticket_price_range}>
          <span className={classes.last_ticket_price}>
            от{" "}
            <span className={classes.last_ticket_price_value}>
              {ticket.departure.min_price.toLocaleString("ru")}
            </span>
            <span style={{ fontSize: 36 }}> &#8381;</span>
          </span>
        </div>
      </div>
    </div>
  )
}

import type React from "react"
import { InfoPiceItem } from "../InfoPiceItem"
import classes from "./infoPricing.module.css"
import { useNavigate } from "react-router-dom"
import { TRAIN_INFO_ROUTER } from "../../../../pages/helpers/const/const"
import { Svg } from "@assets"
import { useAppDispatch } from "../../../../app/hooks"
import { setTicket } from "../../../../modules/TicketInfo/slice/trainInfoSlice"
import { stringify } from "querystring"

export const InfoPricing: React.FC<any> = ({ ticket }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {
    departure: { available_seats_info },
  } = ticket

  const {
    departure: { price_info },
  } = ticket

  const {
    fourth: fourthSeatsInfo,
    third: thirdSeatsInfo,
    second: secondSeatInfo,
    first: firstSeatInfo,
  } = available_seats_info

  const {
    fourth: fourthPrice,
    third: thirdPrice,
    second: secondPrice,
    first: firstPrice,
  } = price_info

  const fourth = {
    name: "сидячий",
    available_seats_info: fourthSeatsInfo,
    price_info: fourthPrice,
  }

  const third = {
    name: "Плацкарт",
    available_seats_info: thirdSeatsInfo,
    price_info: thirdPrice,
  }

  const second = {
    name: "Купе",
    available_seats_info: secondSeatInfo,
    price_info: secondPrice,
  }

  const first = {
    name: "Люкс",
    available_seats_info: firstSeatInfo,
    price_info: firstPrice,
  }

  const handleBtn = () => {
    navigate(`/${TRAIN_INFO_ROUTER}`)
    dispatch(setTicket(ticket))
    localStorage.setItem("train_info", JSON.stringify(ticket))
  }

  return (
    <>
      <div className={classes.infoPricing}>
        <div className={classes.infoPricingList}>
          {ticket.departure.available_seats_info.fourth && (
            <InfoPiceItem data={fourth} />
          )}
          {ticket.departure.available_seats_info.third && (
            <InfoPiceItem data={third} isTooltip={true} />
          )}
          {ticket.departure.available_seats_info.second && (
            <InfoPiceItem data={second} isTooltip={true} />
          )}
          {ticket.departure.available_seats_info.first && (
            <InfoPiceItem data={first} />
          )}
        </div>

        <div className={classes.infoPricingFooter}>
          <div className={classes.infoPricingOption}>
            {ticket.departure.have_wifi && <Svg.Wifi />}
            {ticket.departure.is_express && <Svg.Express />}
            {<Svg.Food />}
          </div>

          <button
            onClick={handleBtn}
            className={classes.infoPricingBtn}
          >
            Выбрать места
          </button>
        </div>
      </div>
    </>
  )
}

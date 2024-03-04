import type React from "react"
import classes from "./ticketInfo.module.css"
import { CardTicket } from "../CardTicket/CardTicket"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { useEffect } from "react"
import { getCoachFrom, getCoachTo } from "../../slice/trainInfoSlice"

export const TicketInfo: React.FC = () => {
  // TODO Сделать компонет билета, прнимает (направление, инфу о билете, инфу овогонах)

  const { ticket, coachListFrom, coachListTo } = useAppSelector(
    (state: RootState) => state.trainInfo,
  )
  const { departure } = ticket
  const { arrival } = ticket
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (arrival) {
      dispatch(getCoachTo(arrival._id))
    }
    dispatch(getCoachFrom(departure._id))
  }, [])

  return (
    <>
      <div className={classes.title}>Выбор мест</div>

      <div className={classes.TicketInfoList}>
        <CardTicket
          direction="from"
          ticketInfo={departure}
          coachList={coachListFrom}
        />

        {ticket.arrival && (
          <CardTicket
            direction="to"
            ticketInfo={arrival}
            coachList={coachListTo}
          />
        )}
      </div>
    </>
  )
}

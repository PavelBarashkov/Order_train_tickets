import type React from "react"
import classes from "./trainInfo.module.css"

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { useEffect } from "react"
import {
  clearSelected,
  getCoachFrom,
  getCoachTo,
} from "../../slice/trainInfoSlice"
import { CardTrainInfo } from "../CardTrainInfo"
import { useLocation, useNavigate } from "react-router-dom"
import { PASSENGER_ROUTER } from "../../../../pages/helpers/const/const"
import { setUser } from "../../../PassengerRegistration/slice/passengerSlice"

export const TrainInfo: React.FC = () => {
  // TODO Сделать компонет билета, прнимает (направление, инфу о билете, инфу овогонах)

  const { ticket, coachListFrom, coachListTo } = useAppSelector(
    (state: RootState) => state.trainInfo,
  )
  const { departure } = ticket
  const { arrival } = ticket
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (arrival) {
      const params = {
        id: arrival._id,
        search: location.search,
      }
      dispatch(getCoachTo(params))
    }
    const params = {
      id: departure._id,
      search: location.search,
    }
    dispatch(getCoachFrom(params))
  }, [location.search])

  return (
    <>
      <div className={classes.title}>Выбор мест</div>

      <div className={classes.TicketInfoList}>
        <CardTrainInfo
          direction="from"
          ticketInfo={departure}
          coachList={coachListFrom}
        />

        {ticket.arrival && (
          <CardTrainInfo
            direction="to"
            ticketInfo={arrival}
            coachList={coachListTo}
          />
        )}
      </div>
      <div className={classes.btnContainer}>
        <button
          onClick={() => {
            navigate(`/${PASSENGER_ROUTER}`)
            dispatch(setUser(coachListFrom.selected))
            localStorage.setItem(
              "totalCount",
              JSON.stringify(
                ticket.arrival
                  ? coachListFrom.selected.cost + coachListTo.selected.cost
                  : coachListFrom.selected.cost,
              ),
            )
          }}
          className={classes.btn}
        >
          ДАЛЕЕ
        </button>
      </div>
    </>
  )
}

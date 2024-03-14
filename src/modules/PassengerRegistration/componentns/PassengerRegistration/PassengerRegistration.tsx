import type React from "react"
import classes from "./passengerRegistration.module.css"
import { PassangerItem } from "../PassangerItem"
import { useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { useNavigate } from "react-router-dom"
import { PAYMENT_ORDER_ROUTE } from "../../../../pages/helpers/const/const"

export const PassengerRegistration: React.FC = () => {
  const { departure } = useAppSelector(
    (state: RootState) => state.passengerRegistration,
  )
  const navigate = useNavigate()

  const isValid = departure.seats.every((seat: any) => "person_info" in seat)

  if (departure.seats.length > 0) {
    return (
      <>
        {departure.seats.map((item: any, index: number) => (
          <PassangerItem
            key={index + 1}
            numberPassenger={index + 1}
            index={index}
          />
        ))}
        <div className={classes.containerBtn}>
          <button
            className={`${classes.btn} ${isValid ? classes.valid : classes.inValid}`}
            disabled={!isValid}
            onClick={() => navigate(`/${PAYMENT_ORDER_ROUTE}`)}
          >
            ДАЛЕЕ
          </button>
        </div>
      </>
    )
  }
  return <div>Нет выбранных билетов</div>
}

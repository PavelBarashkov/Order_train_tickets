import type React from "react"
import classes from "./seat.module.css"
import { useAppDispatch, useAppSelector } from "../../../../../../../app/hooks"
import {
  setSelectedSeatFrom,
  setSelectedSeatTo,
} from "../../../../../slice/trainInfoSlice"
import type { RootState } from "../../../../../../../app/store"

export const Seat: React.FC<any> = ({
  id,
  number,
  type,
  left,
  available,
  direction,
  seats,
  price,
  id_route
}) => {
  const dispatch = useAppDispatch()
  const { coachListFrom, coachListTo } = useAppSelector(
    (state: RootState) => state.trainInfo,
  )
  const style: any = {
    top: "0",
    left: `${left}px`,
  }

  if (type === "top") {
    if (number % 2 === 0) {
      style.top = "25px"
    } else {
      style.top = "53px"
    }
  } else if (type === "bottom") {
    style.top = "98px"
  } else if (type === "lux") {
    style.top = "26px"
  } else if (number < 33) {
    if (number % 2 === 0) {
      style.top = "30px"
    } else {
      style.top = "52px"
    }
  } else if (number === 62 || number % 2 !== 0) {
    style.top = "100px"
  } else {
    style.top = "80px"
  }

  const handleBtnSeat = () => {
    if (direction === "from") {
      dispatch(setSelectedSeatFrom({ id: id, number: number, price: price, id_route: id_route }))
    } else {
      dispatch(setSelectedSeatTo({ id: id, number: number, price: price, id_route: id_route }))
    }
    console.log(id_route)
  }

  return (
    <button
      type="button"
      className={`${classes.coach_seat} ${type === "single" ? classes.coach_seat__single : type === "top" ? classes.coach_seat__top : type === "bottom" ? classes.coach_seat__bottom : type === "lux" ? classes.coach_seat__lux : ""} ${
        direction === "from"
          ? coachListFrom.selected.seats.some(
              seat => seat.seat_number === number && seat.coach_id === id,
            )
            ? classes.coach_seat_active
            : ""
          : coachListTo.selected.seats.some(
                seat => seat.seat_number === number && seat.coach_id === id,
              )
            ? classes.coach_seat_active
            : ""
      }`}
      style={style}
      disabled={!available}
      onClick={handleBtnSeat}
    >
      <p className="coach-seat-number" id={number}>
        {number}
      </p>
    </button>
  )
}

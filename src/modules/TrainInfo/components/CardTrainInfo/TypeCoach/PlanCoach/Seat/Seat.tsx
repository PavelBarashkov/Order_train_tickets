import type React from "react"
import classes from "./seat.module.css"
import { useAppDispatch, useAppSelector } from "../../../../../../../app/hooks"
import { setSelectedSeatFrom } from "../../../../../slice/trainInfoSlice"
import type { RootState } from "../../../../../../../app/store"

export const Seat: React.FC<any> = ({
  id,
  number,
  type,
  left,
  available,
  direction,
  seats,
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
    style.top = "29px"
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
      dispatch(setSelectedSeatFrom({ id: id, number: number }))
      console.log(id)
    }
  }

  return (
    <button
      type="button"
      className={`${classes.coach_seat} ${type === "single" ? classes.coach_seat__single : type === "top" ? classes.coach_seat__top : type === "bottom" ? classes.coach_seat__bottom : ""} ${
        coachListFrom.selected.seats.some(seat => seat.seat_number === number)
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

import type React from "react"
import classes from "./second.module.css"
import { Seat } from "../Seat/Seat"

export const Second: React.FC<any> = ({ coach, seats, direction }) => {
  const planSeats = [
    { number: 1, type: "top", left: "120" },
    { number: 2, type: "top", left: "120" },
    { number: 3, type: "top", left: "170" },
    { number: 4, type: "top", left: "170" },
    { number: 5, type: "top", left: "200" },
    { number: 6, type: "top", left: "200" },
    { number: 7, type: "top", left: "250" },
    { number: 8, type: "top", left: "250" },
    { number: 9, type: "top", left: "280" },
    { number: 10, type: "top", left: "280" },
    { number: 11, type: "top", left: "329" },
    { number: 12, type: "top", left: "329" },
    { number: 13, type: "top", left: "359" },
    { number: 14, type: "top", left: "359" },
    { number: 15, type: "top", left: "409" },
    { number: 16, type: "top", left: "409" },
    { number: 17, type: "top", left: "439" },
    { number: 18, type: "top", left: "439" },
    { number: 19, type: "top", left: "490" },
    { number: 20, type: "top", left: "490" },
    { number: 21, type: "top", left: "520" },
    { number: 22, type: "top", left: "520" },
    { number: 23, type: "top", left: "568" },
    { number: 24, type: "top", left: "568" },
    { number: 25, type: "top", left: "598" },
    { number: 26, type: "top", left: "598" },
    { number: 27, type: "top", left: "648" },
    { number: 28, type: "top", left: "648" },
    { number: 29, type: "top", left: "679" },
    { number: 30, type: "top", left: "679" },
    { number: 31, type: "top", left: "727" },
    { number: 32, type: "top", left: "727" },
  ]

  const planSeatsWitchPrice = planSeats.map((item) => {
    if (item.number % 2 === 0) {
      return {...item, price: coach.top_price }
    } else {
      return {...item, price: coach.bottom_price}
    }
  })

  return (
    <div className={classes.plan}>
      <div className={classes.coach_wagon_number}>
        {coach.name.split("-")[1]}
      </div>

      {planSeatsWitchPrice.map((item: any) => (
        <Seat
          id={coach._id}
          coach={coach}
          direction={direction}
          seats={seats}
          number={item.number}
          type={item.type}
          left={item.left}
          available={
            seats[item.number - 1] ? seats[item.number - 1].available : false
          }
          price={item.price}
        />
      ))}
    </div>
  )
}

import type React from "react"
import classes from "./first.module.css"
import { Seat } from "../Seat/Seat"

export const First: React.FC<any> = ({ coach, seats, direction }) => {
  const planSeats = [
    { number: 1, type: "lux", left: "119" },
    { number: 3, type: "lux", left: "171" },
    { number: 4, type: "lux", left: "200" },
    { number: 5, type: "lux", left: "251" },
    { number: 6, type: "lux", left: "281" },
    { number: 7, type: "lux", left: "330" },
    { number: 8, type: "lux", left: "359" },
    { number: 9, type: "lux", left: "410" },
    { number: 10, type: "lux", left: "439" },
    { number: 11, type: "lux", left: "491" },
    { number: 12, type: "lux", left: "519" },
    { number: 13, type: "lux", left: "568" },
    { number: 14, type: "lux", left: "598" },
    { number: 15, type: "lux", left: "649" },
    { number: 16, type: "lux", left: "680" },
    { number: 18, type: "lux", left: "730" },
  ]

  const planSeatsWitchPrice = planSeats.map((item) => {
    return {...item, price: coach.top_price}
})


  return (
    <div className={classes.plan}>
      <div className={classes.coach_wagon_number}>
        {coach.name.split("-")[1]}
      </div>

      {planSeatsWitchPrice.map((item: any) => (
        <Seat
          id={coach._id}
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

import type React from "react"
import classes from "./fourth.module.css"
import { Seat } from "../Seat/Seat"

export const Fourth: React.FC<any> = ({ coach, seats, direction }) => {
  const planSeats = [
    { number: 1, type: "single", left: "130" },
    { number: 2, type: "single", left: "130" },
    { number: 3, type: "single", left: "170" },
    { number: 4, type: "single", left: "170" },
    { number: 5, type: "single", left: "207" },
    { number: 6, type: "single", left: "207" },
    { number: 7, type: "single", left: "245" },
    { number: 8, type: "single", left: "245" },
    { number: 9, type: "single", left: "285" },
    { number: 10, type: "single", left: "285" },
    { number: 11, type: "single", left: "325" },
    { number: 12, type: "single", left: "325" },
    { number: 13, type: "single", left: "365" },
    { number: 14, type: "single", left: "365" },
    { number: 15, type: "single", left: "404" },
    { number: 16, type: "single", left: "404" },
    { number: 17, type: "single", left: "443" },
    { number: 18, type: "single", left: "443" },
    { number: 19, type: "single", left: "482" },
    { number: 20, type: "single", left: "482" },
    { number: 21, type: "single", left: "521" },
    { number: 22, type: "single", left: "521" },
    { number: 23, type: "single", left: "560" },
    { number: 24, type: "single", left: "560" },
    { number: 25, type: "single", left: "599" },
    { number: 26, type: "single", left: "599" },
    { number: 27, type: "single", left: "638" },
    { number: 28, type: "single", left: "638" },
    { number: 29, type: "single", left: "676" },
    { number: 30, type: "single", left: "676" },
    { number: 31, type: "single", left: "715" },
    { number: 32, type: "single", left: "715" },
    { number: 33, type: "single", left: "128" },
    { number: 34, type: "single", left: "170" },
    { number: 35, type: "single", left: "170" },
    { number: 36, type: "single", left: "207" },
    { number: 37, type: "single", left: "207" },
    { number: 38, type: "single", left: "245" },
    { number: 39, type: "single", left: "245" },
    { number: 40, type: "single", left: "285" },
    { number: 41, type: "single", left: "285" },
    { number: 42, type: "single", left: "325" },
    { number: 43, type: "single", left: "325" },
    { number: 44, type: "single", left: "365" },
    { number: 45, type: "single", left: "365" },
    { number: 46, type: "single", left: "404" },
    { number: 47, type: "single", left: "404" },
    { number: 48, type: "single", left: "443" },
    { number: 49, type: "single", left: "443" },
    { number: 50, type: "single", left: "482" },
    { number: 51, type: "single", left: "482" },
    { number: 52, type: "single", left: "521" },
    { number: 53, type: "single", left: "521" },
    { number: 54, type: "single", left: "560" },
    { number: 55, type: "single", left: "560" },
    { number: 56, type: "single", left: "599" },
    { number: 57, type: "single", left: "599" },
    { number: 58, type: "single", left: "638" },
    { number: 59, type: "single", left: "638" },
    { number: 60, type: "single", left: "676" },
    { number: 61, type: "single", left: "676" },
    { number: 62, type: "single", left: "715" },
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

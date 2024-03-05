import type React from 'react'
import { Seat } from '../Seat/Seat';
import classes from './third.module.css'

export const Third: React.FC<any> = ({ coach, seats, direction }) => {
    const planSeats = [
        { number: 1, type: 'top', left: '119' },
        { number: 2, type: 'top', left: '119' },
        { number: 3, type: 'top', left: '170' },
        { number: 4, type: 'top', left: '170' },
        { number: 5, type: 'top', left: '200' },
        { number: 6, type: 'top', left: '200' },
        { number: 7, type: 'top', left: '250' },
        { number: 8, type: 'top', left: '250' },
        { number: 9, type: 'top', left: '280' },
        { number: 10, type: 'top', left: '280' },
        { number: 11, type: 'top', left: '329' },
        { number: 12, type: 'top', left: '329' },
        { number: 13, type: 'top', left: '359' },
        { number: 14, type: 'top', left: '359' },
        { number: 15, type: 'top', left: '409' },
        { number: 16, type: 'top', left: '409' },
        { number: 17, type: 'top', left: '439' },
        { number: 18, type: 'top', left: '439' },
        { number: 19, type: 'top', left: '490' },
        { number: 20, type: 'top', left: '490' },
        { number: 21, type: 'top', left: '520' },
        { number: 22, type: 'top', left: '520' },
        { number: 23, type: 'top', left: '568' },
        { number: 24, type: 'top', left: '568' },
        { number: 25, type: 'top', left: '598' },
        { number: 26, type: 'top', left: '598' },
        { number: 27, type: 'top', left: '647' },
        { number: 28, type: 'top', left: '647' },
        { number: 29, type: 'top', left: '678' },
        { number: 30, type: 'top', left: '678' },
        { number: 31, type: 'top', left: '725' },
        { number: 32, type: 'top', left: '725' },
        { number: 33, type: 'bottom', left: '119' },
        { number: 34, type: 'bottom', left: '159' },
        { number: 35, type: 'bottom', left: '200' },
        { number: 36, type: 'bottom', left: '238' },
        { number: 37, type: 'bottom', left: '280' },
        { number: 38, type: 'bottom', left: '317' },
        { number: 39, type: 'bottom', left: '359' },
        { number: 40, type: 'bottom', left: '397' },
        { number: 41, type: 'bottom', left: '438' },
        { number: 42, type: 'bottom', left: '476' },
        { number: 43, type: 'bottom', left: '520' },
        { number: 44, type: 'bottom', left: '557' },
        { number: 45, type: 'bottom', left: '598' },
        { number: 46, type: 'bottom', left: '636' },
        { number: 47, type: 'bottom', left: '678' },
        { number: 48, type: 'bottom', left: '715' },
      ];
  return (
    <div className={classes.plan}>
    <div className={classes.coach_wagon_number}>
      {coach.name.split("-")[1]}
    </div>

    {planSeats.map((item: any) => (
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
      />
    ))}
  </div>
  )
}

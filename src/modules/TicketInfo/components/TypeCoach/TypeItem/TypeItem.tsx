import type React from "react"
import classes from "./typeItem.module.css"
import { Col, Row } from "react-bootstrap"

interface ITypeItemProps {
  coach: {
    number: number
    typeCoach: string
    seats: {
      allSeats: number
      totalPrice: number
      lower?: {
        quantity: number
        cost: number
      }
      top?: {
        quantity: number
        cost: number
      }
    }
    options: {
      wifi: boolean
      conditioning: boolean
      linens_included: boolean
      food: boolean
    }
  }
}

export const TypeItem: React.FC<ITypeItemProps> = ({ coach }) => {
  return (
    <div>
      <Row className={classes.TypeItemRow}>
        <Col className={classes.headerNumber}>
          <div className={classes.number}>{coach.number}</div>
          <div className={classes.headerNumberTitle}>Вагон</div>
        </Col>

        <Col className={classes.TypeItemCol}>
          <div>Места {coach.seats.allSeats}</div>
          {coach.seats.top && <div>Верхние {coach.seats.top.quantity}</div>}
          {coach.seats.lower && <div>Нижние {coach.seats.lower.quantity}</div>}
        </Col>

        <Col></Col>

        <Col></Col>
      </Row>
    </div>
  )
}

import type React from "react"
import classes from "./cardTicket.module.css"
import { InfoTrain } from "../InfoTrain"
import { InfoDirection } from "../InfoDirection"
import { InfoPricing } from "../InfoPricing"
import { Col, Row } from "react-bootstrap"

export const CardTicket: React.FC<any> = ({ ticket }) => {
  return (
    <Row className={classes.card}>
      <Col md={3} className={classes.cardInfoTrain}>
        <InfoTrain ticket={ticket} />
      </Col>
      <Col md={5} className={classes.cardInfo}>
        <InfoDirection ticket={ticket} />
      </Col>
      <Col md={4} className={classes.cardInfo}>
        <InfoPricing ticket={ticket}/>
      </Col>
    </Row>
  )
}

import type React from "react"
import { CardTicket } from "../CardTicket/CardTicket"
import { Col, Row } from "react-bootstrap"
import { ListManagement } from "../ListManagement/ListManagement"
import { Pagination } from "../../../Pagination/Pagination"

export const CardTicketList: React.FC = () => {
  return (
    <Row className="g-5">
        <Col>
           <ListManagement/>
        </Col>
      <Col>
        <CardTicket />
      </Col>
      <Col>
        <CardTicket />
      </Col>
      <Col>
        <CardTicket />
      </Col>
        <Pagination/>
      
    </Row>
  )
}

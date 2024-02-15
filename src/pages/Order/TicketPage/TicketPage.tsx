import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FilterDirection } from '../../../modules/FilterDirection/FilterDirection'

export const TicketPage = () => {
  return (
    <Container>
      <Row>
        <Col style={{maxWidth: 364}}>
        <FilterDirection/>
        </Col>
        <Col>
          тут будут билеты
        </Col>
      </Row>
    </Container>
  )
}

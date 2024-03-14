import type React from "react"
import { Col, Container, Row } from "react-bootstrap"

interface PageContainerWithSidBarProps {
  asideBar: React.ReactNode
  children: React.ReactNode
  lastTickets?: React.ReactNode
}

export const PageContainerWithSidBar: React.FC<
  PageContainerWithSidBarProps
> = ({ asideBar, children, lastTickets }) => {
  return (
    <Container style={{ marginTop: 95, marginBottom: 95 }}>
      <Row className="justify-content-between">
        <Col md="auto">
          <aside>{asideBar}</aside>
          {lastTickets && <div>{lastTickets}</div>}
        </Col>
        <Col md={8}>{children}</Col>
      </Row>
    </Container>
  )
}

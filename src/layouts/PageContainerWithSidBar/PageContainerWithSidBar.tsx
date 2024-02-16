import type React from "react"
import { Col, Container, Row } from "react-bootstrap"

interface PageContainerWithSidBarProps {
  asideBar: React.ReactNode
  children: React.ReactNode
}

export const PageContainerWithSidBar: React.FC<
  PageContainerWithSidBarProps
> = ({ asideBar, children }) => {
  return (
    <Container style={{ marginTop: 95 }}>
      <Row className="justify-content-between">
        <Col md={4}>
          <aside>{asideBar}</aside>
        </Col>
        <Col md={6}>{children}</Col>
      </Row>
    </Container>
  )
}

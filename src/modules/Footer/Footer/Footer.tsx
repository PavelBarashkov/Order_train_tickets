import { Col, Container, Row } from "react-bootstrap"
import classes from "./footer.module.css"
import { Contacts } from "../components/Contacts/Contacts"
import { Subscription } from "../components/Subscription/Subscription"

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Row>
          <Col lg={4}>
            <Contacts />
          </Col>
          <Col className="d-flex justify-content-end" lg={8}>
            <Subscription />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

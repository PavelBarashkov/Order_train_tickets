import { Col, Container, Row } from "react-bootstrap"
import { Title } from "../Title/Title"
import classes from "./mainInfo.module.css"
import { Form } from "../Form/Form"

export const MainInfo = () => {
  return (
    <Container style={{ maxWidth: 1480, marginTop: 253 }}>
      <Row xs={1} sb={1} xxl={2} className="align-items-center">
        <Col>
          <Title />
        </Col>
        <Col>
          <Form />
        </Col>
      </Row>
    </Container>
  )
}

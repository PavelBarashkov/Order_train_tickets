import { Col, Container, Row } from "react-bootstrap"
import { Title } from "../Title/Title"
import classes from "./mainInfo.module.css"
import { Form } from "../Form/Form"
import { useLocation } from "react-router-dom"
import { MAIN_ROUTE } from "../../../../pages/helpers/const/const"
import { StageBar } from "../StageBar/StageBar"

export const MainInfo = () => {
  const location = useLocation()
  const isMain = location.pathname === MAIN_ROUTE

  if (isMain) {
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

  return (
    <>
      <Container style={{ maxWidth: 1480, marginTop: 253 }}>
        <Form />
      </Container>
      <StageBar />
    </>
  )
}

import type React from "react"
import { useLocation } from "react-router-dom"
import { MAIN_ROUTE } from "../../pages"
import classes from "./header.module.css"
import { Col, Container, Row } from "react-bootstrap"
import { SUCCESS_ORDER_ROUTE } from "../../pages/helpers/const/const"

interface IHeaderProps {
  navBar: React.ReactNode
  logo: React.ReactNode
  title?: React.ReactNode
  form?: React.ReactNode
  stageBar?: React.ReactNode
}

export const Header: React.FC<IHeaderProps> = ({
  navBar,
  logo,
  title,
  form,
  stageBar,
}) => {
  const location = useLocation()
  const isMain = location.pathname === MAIN_ROUTE
  const isSuccess = location.pathname === `/${SUCCESS_ORDER_ROUTE}`

  if (isMain) {
    return (
      <header className={`${classes.header} ${classes.mainPage}`}>
        {logo}
        {navBar}
        <div className={classes.headerMainSection}>
          <Container>
            <Row className="align-items-center">
              <Col xs={5}>{title}</Col>
              <Col>{form}</Col>
            </Row>
          </Container>
        </div>
      </header>
    )
  }

  if (isSuccess) {
    return (
      <header className={`${classes.header} ${classes.successPage}`}>
      {logo}
      {navBar}
      <div className={classes.headerMainSection}>
        <Container>
          <Row className="align-items-center" style={{height: 800}}>
          </Row>
        </Container>
      </div>
    </header>
    )
  }

  return (
    <header className={classes.header}>
      {logo}
      {navBar}
      <div className={classes.headerMainSection}>
        <Container style={{ maxWidth: 1490 }}>{form}</Container>
        {stageBar}
      </div>
    </header>
  )
}

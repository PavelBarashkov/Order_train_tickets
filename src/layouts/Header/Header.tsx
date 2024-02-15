import type React from "react"
import { useLocation } from "react-router-dom"
import { MAIN_ROUTE } from "../../pages"
import classes from "./header.module.css"
import { Col, Container, Row } from "react-bootstrap"

interface IHeaderProps {
  navBar: React.ReactNode
  logo: React.ReactNode
  title?: React.ReactNode
  form?: React.ReactNode
  stageBard?: React.ReactNode
}

export const Header: React.FC<IHeaderProps> = ({
  navBar,
  logo,
  title,
  form,
  stageBard,
}) => {
  const location = useLocation()
  const isMain = location.pathname === MAIN_ROUTE

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

  return (
    <header className={classes.header}>
      {logo}
      {navBar}
      <div className={classes.headerMainSection}>
        <Container style={{ maxWidth: 1490 }}>{form}</Container>
        {stageBard}
      </div>
    </header>
  )
}

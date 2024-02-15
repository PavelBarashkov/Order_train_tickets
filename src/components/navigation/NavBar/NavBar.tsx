import type React from "react"
import classes from "./navBar.module.css"
import { Container, Nav, Navbar as NavBarBootstrap } from "react-bootstrap"

export const NavBar: React.FC = () => {
  return (
    <NavBarBootstrap expand="lg" className={classes.navbar}>
      <Container style={{ maxWidth: 1436 }}>
        <NavBarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavBarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className={classes.navList}>
            <Nav.Link className={classes.menuLink} href="#home">
              О нас
            </Nav.Link>
            <Nav.Link className={classes.menuLink}>Как это работает</Nav.Link>
            <Nav.Link className={classes.menuLink}>Отзывы</Nav.Link>
            <Nav.Link className={classes.menuLink}>Контакты</Nav.Link>
          </Nav>
        </NavBarBootstrap.Collapse>
      </Container>
    </NavBarBootstrap>
  )
}

import type React from "react"
import classes from "./navBar.module.css"
import { Container, Nav, Navbar as NavBarBootstrap } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { MAIN_ROUTE } from "../../../pages"

export const NavBar: React.FC = () => {
  return (
    <NavBarBootstrap expand="lg" className={classes.navbar}>
      <Container style={{ maxWidth: 1436 }}>
        <NavBarBootstrap.Toggle aria-controls="basic-navbar-nav" />
        <NavBarBootstrap.Collapse id="basic-navbar-nav">
          <Nav className={classes.navList}>
            <NavLink className={classes.menuLink} to={MAIN_ROUTE}>
              О нас
            </NavLink>
            <NavLink className={classes.menuLink} to={MAIN_ROUTE}>Как это работает</NavLink>
            <NavLink className={classes.menuLink} to={MAIN_ROUTE}>Отзывы</NavLink>
            <NavLink className={classes.menuLink} to={MAIN_ROUTE}>Контакты</NavLink>
          </Nav>
        </NavBarBootstrap.Collapse>
      </Container>
    </NavBarBootstrap>
  )
}

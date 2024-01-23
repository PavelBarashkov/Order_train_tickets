import classes from "./menu.module.css"
import { Container, Nav, Navbar } from "react-bootstrap"

export const Menu = () => {
  return (
    <Navbar expand="lg" className={classes.navbar}>
      <Container style={{ maxWidth: 1436 }}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={classes.navList}>
            <Nav.Link className={classes.menuLink} href="#home">
              О нас
            </Nav.Link>
            <Nav.Link className={classes.menuLink}>Как это работает</Nav.Link>
            <Nav.Link className={classes.menuLink}>Отзывы</Nav.Link>
            <Nav.Link className={classes.menuLink}>Контакты</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

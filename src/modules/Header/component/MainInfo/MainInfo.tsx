import { Container } from "react-bootstrap"
import { Title } from "../Title/Title"
import classes from "./mainInfo.module.css"
import { useLocation } from "react-router-dom"
import { MAIN_ROUTE } from "../../../../pages/helpers/const/const"

export const MainInfo = () => {
  const location = useLocation();
  const isMain = location.pathname === MAIN_ROUTE;

  if (isMain) {
    return (
    <div className={classes.MainInfo}>
      <Container style={{ maxWidth: 1480 }}>
        <div className={classes.containerInfo}>
          <Title />
          <form className={classes.form} action=""></form>
        </div>
      </Container>
    </div>
    )
  }

  return (
    <div className={classes.MainInfo}>
    <Container>
      <div className={classes.containerInfo}>
        <form className={classes.form} action=""></form>
      </div>
    </Container>
  </div>
  )
}

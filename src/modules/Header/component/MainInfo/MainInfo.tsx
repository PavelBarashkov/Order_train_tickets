import { Container } from "react-bootstrap"
import { Title } from "../Title/Title"
import classes from "./mainInfo.module.css"

export const MainInfo = () => {
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

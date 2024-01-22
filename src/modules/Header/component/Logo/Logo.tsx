import classes from "./logo.module.css"
import { Container } from "../../../../components/Container/Container"

export const Logo = () => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.containerLogo}>Лого</div>
      </Container>
    </div>
  )
}

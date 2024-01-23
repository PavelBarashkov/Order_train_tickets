import { Container } from "../Container/Container"
import { Slider } from "./Slider/Slider"
import { Title } from "./Title/Title"
import classes from "./comments.module.css"

export const Comments = () => {
  return (
    <section className={classes.comments}>
      <Container>
        <Title />
        <Slider />
      </Container>
    </section>
  )
}

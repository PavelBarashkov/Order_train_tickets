import type React from "react"
import { Container } from "@components"
import { Slider } from "./Slider/Slider"
import { Title } from "./Title/Title"
import classes from "./comments.module.css"

export const Comments: React.FC = () => {
  return (
    <section className={classes.comments}>
      <Container>
        <Title />
        <Slider />
      </Container>
    </section>
  )
}

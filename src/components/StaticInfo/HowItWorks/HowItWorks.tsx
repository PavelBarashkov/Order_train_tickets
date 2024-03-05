import type React from "react"
import { Container } from "@components"
import { Header } from "./Header/Header"
import { InfoList } from "./InfoList/InfoList"
import classes from "./howItWorks.module.css"

export const HowItWorks: React.FC = () => {
  return (
    <section className={classes.section}>
      <Container>
        <div className={classes.sectionContainer}>
          <Header />
          <InfoList />
        </div>
      </Container>
    </section>
  )
}

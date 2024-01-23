import { Container } from "../Container/Container"
import { Header } from "./Header/Header"
import { InfoList } from "./InfoList/InfoList"
import classes from "./howItWorks.module.css"

export const HowItWorks = () => {
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

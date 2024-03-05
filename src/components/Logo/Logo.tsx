import type React from "react"
import classes from "./logo.module.css"
import { Container } from "../Container/Container"

interface ILogoProps {
  logo: string
}

export const Logo: React.FC<ILogoProps> = ({ logo }) => {
  return (
    <div className={classes.container}>
      <Container>
        <div className={classes.containerLogo}>{logo}</div>
      </Container>
    </div>
  )
}

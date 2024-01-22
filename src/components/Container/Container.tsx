import type React from "react"
import { Container as ContainerBootstrap } from "react-bootstrap"
import classes from "./container.module.css"

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <ContainerBootstrap className={classes.container}>
      {children}
    </ContainerBootstrap>
  )
}

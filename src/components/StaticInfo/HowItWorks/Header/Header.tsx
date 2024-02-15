import type React from "react"
import classes from "./header.module.css"
import { Title } from "../Title/Title"
import { Button } from "../Button/Button"

export const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <Title />
      <Button />
    </div>
  )
}

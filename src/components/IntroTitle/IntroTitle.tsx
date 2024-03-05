import type React from "react"
import classes from "./introTitle.module.css"

export const IntroTitle: React.FC = () => {
  return (
    <h1 className={classes.title}>
      <span>Вся жизнь -</span> путешествие!
    </h1>
  )
}

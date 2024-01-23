import type React from "react"
import classes from "./headerCustom.module.css"

interface HeaderCustomProps {
  children: React.ReactNode
}

export const HeaderCustom = ({ children }: HeaderCustomProps) => {
  return <header className={classes.header}> {children} </header>
}

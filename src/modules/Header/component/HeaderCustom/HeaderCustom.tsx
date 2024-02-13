import type React from "react"
import classes from "./headerCustom.module.css"
import { useLocation } from "react-router-dom"
import { MAIN_ROUTE } from "../../../../pages/helpers/const/const"

interface HeaderCustomProps {
  children: React.ReactNode
}

export const HeaderCustom = ({ children }: HeaderCustomProps) => {
  const location = useLocation()
  const isMain = location.pathname === MAIN_ROUTE

  if (isMain) {
    return <header className={classes.header}> {children} </header>
  }

  return <header className={classes.headerSub}> {children} </header>
}

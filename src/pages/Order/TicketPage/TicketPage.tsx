import type React from "react"
import { Header } from "../../../layouts"
import { Logo, NavBar } from "@components"
import { FormSearchTickets } from "@modules"

export const TicketPage: React.FC = () => {
  return (
    <>
      <Header
        logo={<Logo logo="Лого" />}
        navBar={<NavBar />}
        form={<FormSearchTickets isMain={false} />}
      />
    </>
  )
}

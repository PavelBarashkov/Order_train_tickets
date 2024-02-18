import type React from "react"
import { Header, PageContainerWithSidBar } from "../../../layouts"
import { Logo, Navigation } from "@components"
import { FilterTickets, FormSearchTickets } from "@modules"
import { CardTicket } from "../../../components/Ticket/CardTicket/CardTicket/CardTicket"
import { CardTicketList } from "../../../components/Ticket/CardTicket/CardTicketList/CardTicketList"

export const TicketPage: React.FC = () => {
  return (
    <>
      <Header
        logo={<Logo logo="Лого" />}
        navBar={<Navigation.NavBar />}
        form={<FormSearchTickets isMain={false} />}
        stageBar={<Navigation.StageBar />}
      />
      <PageContainerWithSidBar asideBar={<FilterTickets />}>
        <CardTicketList/>
      </PageContainerWithSidBar>
    </>
  )
}

import type React from "react"
import { Header, PageContainerWithSidBar } from "../../../layouts"
import { Logo, Navigation } from "@components"
import { FilterTickets, FormSearchTickets, ListTickets } from "@modules"

export const TicketPage: React.FC = () => {
  return (
    <>
      <Header
        logo={<Logo logo="Лого" />}
        navBar={<Navigation.NavBar />}
        form={<FormSearchTickets.FormSearchTickets isMain={false} />}
        stageBar={<Navigation.StageBar />}
      />
      <PageContainerWithSidBar asideBar={<FilterTickets.FilterTickets />}>
        <ListTickets.ListTickets/>
      </PageContainerWithSidBar>
    </>
  )
}

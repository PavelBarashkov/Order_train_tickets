import { Logo, Navigation } from "@components"
import { Header, PageContainerWithSidBar } from "../../../layouts"
import { FilterTickets, FormSearchTickets, TicketInfo } from "@modules"

export const TrainInfoPage = () => {
  return (
    <>
      <Header
        logo={<Logo logo="Лого" />}
        navBar={<Navigation.NavBar />}
        form={<FormSearchTickets isMain={false} />}
        stageBar={<Navigation.StageBar />}
      />
      <PageContainerWithSidBar asideBar={<FilterTickets />}>
        <TicketInfo />
      </PageContainerWithSidBar>
    </>
  )
}

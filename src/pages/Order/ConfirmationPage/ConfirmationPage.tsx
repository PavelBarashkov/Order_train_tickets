import type React from 'react'
import { Header, PageContainerWithSidBar } from '../../../layouts'
import { Logo, Navigation } from '../../../components'
import { ConfirmationOrder, FormSearchTickets, PassengerRegistration } from '../../../modules'

export const ConfirmationPage: React.FC = () => {
  return (
    <>
    <Header
      logo={<Logo logo="Лого" />}
      navBar={<Navigation.NavBar />}
      form={<FormSearchTickets.FormSearchTickets isMain={false} />}
      stageBar={<Navigation.StageBar />}
    />
    <PageContainerWithSidBar asideBar={<PassengerRegistration.AsideBar />}>
      <ConfirmationOrder.Confirmation/>
    </PageContainerWithSidBar>
  </>
  )
}

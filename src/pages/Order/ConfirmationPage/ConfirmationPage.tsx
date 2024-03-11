import type React from 'react'
import { Header, PageContainerWithSidBar } from '../../../layouts'
import { Logo, Navigation } from '../../../components'
import { FormSearchTickets, PassengerRegistration } from '../../../modules'
import { Confirmation } from '../../../components/Confirmation/Confirmation'

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
      <Confirmation/>
    </PageContainerWithSidBar>
  </>
  )
}

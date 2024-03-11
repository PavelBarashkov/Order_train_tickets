import type React from 'react'
import { Header, PageContainerWithSidBar } from '../../../layouts'
import { Logo, Navigation } from '../../../components'
import { FormSearchTickets, PassengerRegistration } from '../../../modules'
import { PayForm } from '../../../components/PayForm/PayForm'

export const PaymentPage: React.FC = () => {
  return (
    <>
    <Header
      logo={<Logo logo="Лого" />}
      navBar={<Navigation.NavBar />}
      form={<FormSearchTickets.FormSearchTickets isMain={false} />}
      stageBar={<Navigation.StageBar />}
    />
    <PageContainerWithSidBar asideBar={<PassengerRegistration.AsideBar />}>
      <PayForm/>

    </PageContainerWithSidBar>
  </>
  )
}

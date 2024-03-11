import type React from 'react'
import { Header, PageContainerWithSidBar } from '../../../layouts'
import { Logo, Navigation } from '../../../components'
import { FilterTickets, FormSearchTickets, PassengerRegistration, TrainInfo } from '../../../modules'
import { PassangerItem } from '../../../modules/PassengerRegistration/componentns/PassangerItem'

export const PassengerPage: React.FC = () => {
  return (
    <>
    <Header
      logo={<Logo logo="Лого" />}
      navBar={<Navigation.NavBar />}
      form={<FormSearchTickets.FormSearchTickets isMain={false} />}
      stageBar={<Navigation.StageBar />}
    />
    <PageContainerWithSidBar asideBar={<PassengerRegistration.AsideBar />}>
      <PassangerItem/>
      <PassangerItem/>
      <PassangerItem/>

    </PageContainerWithSidBar>
  </>
  )
}

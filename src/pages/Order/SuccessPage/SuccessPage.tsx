import type React from 'react'
import { Header, PageContainerWithSidBar } from '../../../layouts'
import { Logo, Navigation } from '../../../components'
import { FormSearchTickets, PassengerRegistration } from '../../../modules'
import { SuccessOrder } from '../../../components/SuccessOrder/SuccessOrder'

export const SuccessPage: React.FC = () => {
  return (
    <>
    <Header
      logo={<Logo logo="Лого" />}
      navBar={<Navigation.NavBar />}
      form={<FormSearchTickets.FormSearchTickets isMain={false} />}
      stageBar={<></>}
    />
    <SuccessOrder/>
  </>
  )
}

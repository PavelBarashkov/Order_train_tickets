import type React from "react"
import { Header } from "../../layouts"
import * as StaticInfo from "../../components/StaticInfo"
import { Logo, NavBar, IntroTitle } from "@components"
import { FormSearchTickets } from "@modules"

export const MainPage: React.FC = () => {
  return (
    <>
      <Header
        logo={<Logo logo="Лого" />}
        navBar={<NavBar />}
        title={<IntroTitle />}
        form={<FormSearchTickets isMain={true} />}
      />
      <StaticInfo.About />
      <StaticInfo.HowItWorks />
      <StaticInfo.Comments />
    </>
  )
}

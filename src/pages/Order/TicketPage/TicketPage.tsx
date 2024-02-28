import type React from "react"
import { Header, PageContainerWithSidBar } from "../../../layouts"
import { Loader, Logo, Navigation } from "@components"
import { FilterTickets, FormSearchTickets, ListTickets } from "@modules"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { getTicket } from "../../../modules/ListTickets/slice/listTicketsSlice"

export const TicketPage: React.FC = () => {
  const { loading } = useAppSelector((state: RootState) => state.listTickets)
  const location = useLocation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTicket(location.search))
  }, [])

  return (
    <>
      <Header
        logo={<Logo logo="Лого" />}
        navBar={<Navigation.NavBar />}
        form={<FormSearchTickets.FormSearchTickets isMain={false} />}
        stageBar={<Navigation.StageBar />}
      />
      {loading ? (
        <Loader />
      ) : (
        <PageContainerWithSidBar asideBar={<FilterTickets.FilterTickets />}>
          <ListTickets.ListTickets />
        </PageContainerWithSidBar>
      )}
    </>
  )
}

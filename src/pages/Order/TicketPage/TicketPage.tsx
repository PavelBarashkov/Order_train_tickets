import type React from "react"
import { Header, PageContainerWithSidBar } from "../../../layouts"
import { Loader, Logo, Navigation } from "@components"
import { FilterTickets, FormSearchTickets, ListTickets } from "@modules"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import type { RootState } from "../../../app/store"
import { useLocation, useSearchParams } from "react-router-dom"
import { useEffect } from "react"
import { getTicket } from "../../../modules/ListTickets/slice/listTicketsSlice"

export const TicketPage: React.FC = () => {
  const { loading, error } = useAppSelector((state: RootState) => state.listTickets)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  let offset = searchParams.get("offset")

  useEffect(() => {
    dispatch(getTicket(location.search))
  }, [offset])

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
        <>
          {error ? (
            <div>{error}</div>
          ) : (
            <PageContainerWithSidBar asideBar={<FilterTickets.FilterTickets />}>
              <ListTickets.ListTickets />
            </PageContainerWithSidBar>
          )}
        </>
      )}
    </>
  );
}

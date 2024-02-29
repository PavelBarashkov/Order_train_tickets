import type React from "react"
import { Col, Row } from "react-bootstrap"
import { ManagementList } from "../ManagementList"
import { useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { CardTicket } from "../../../../components/Ticket/CardTicket/CardTicket/CardTicket"
import { Pagination } from "../../../../components/Pagination/Pagination"
import { useLocation, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const ListTickets: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()
  const { tickets, total_count } = useAppSelector(
    (state: RootState) => state.listTickets,
  )
  const [limit, setLimit] = useState<string>("5")

  useEffect(() => {
    const limitFromParams = searchParams.get("limit")
    if (limitFromParams) {
      setLimit(limitFromParams)
    }
  }, [location.search])
  return (
    <Row fluid="md" className="g-5">
      <Col>
        <ManagementList />
      </Col>
      {tickets.length > 0 ? (
        <>
          {tickets.map((ticket: any) => (
            <Col style={{ flex: "auto" }}>
              <CardTicket ticket={ticket} />
            </Col>
          ))}
          <Col>
            <Pagination totalCount={total_count} limit={limit} />
          </Col>
        </>
      ) : (
        <div>Билетов не найдено</div>
      )}
    </Row>
  )
}

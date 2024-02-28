import type React from "react"
import { Col, Row } from "react-bootstrap"
import { SortTickets } from "../SortTickets/SortTickets"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import queryString from "query-string"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { getTicket } from "../../slice/listTicketsSlice"
import type { RootState } from "../../../../app/store"

export const ListTickets: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { total_count } = useAppSelector(
    (state: RootState) => state.listTickets,
  )

  useEffect(() => {
    // dispatch(getTicket(location.search))
  }, [])

  return (
    <Row className="g-5">
      <Col>
        <SortTickets total_count={total_count} />
      </Col>
    </Row>
  )
}

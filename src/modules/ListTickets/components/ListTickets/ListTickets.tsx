import type React from "react"
import { Col, Row } from "react-bootstrap"
import { ManagementList } from "../ManagementList"
import { useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { CardTicket } from "../../../../components/Ticket/CardTicket/CardTicket/CardTicket"

export const ListTickets: React.FC = () => {
  const { tickets } = useAppSelector((state: RootState) => state.listTickets)

  return (
    <Row className="g-5">
      <Col>
        <ManagementList />
        {tickets.length > 0 ? (
          <>
            {tickets.map((ticket: any) => (
              <CardTicket ticket={ticket}/>
            ))}          
          </>
        ) : (
          <div>Билетов не найдено</div>
        )}
      </Col>
    </Row>
  )
}

import type React from "react"
import { Col, Row } from "react-bootstrap"
import { ManagementList } from "../ManagementList"
import { useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { CardTicket } from "../../../../components/Ticket/CardTicket/CardTicket/CardTicket"

export const ListTickets: React.FC = () => {
  const { tickets } = useAppSelector((state: RootState) => state.listTickets)

  return (
    <Row fluid="md" className="g-5">
      <Col>
        <ManagementList />
      </Col>
      {tickets.length > 0 ? (
        <>
          {tickets.map((ticket: any) => (
            <Col style={{flex: 'auto'}}>
              <CardTicket ticket={ticket} />
            </Col>
          ))}
        </>
      ) : (
        <div>Билетов не найдено</div>
      )}
    </Row>
  )
}

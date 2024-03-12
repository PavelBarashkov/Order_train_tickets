import type React from "react"
import { PassangerItem } from "../PassangerItem"

export const PassengerRegistration: React.FC = () => {
  const countTicketsFromLocal = localStorage.getItem("ticket_from_info")
  const countTicketsFrom = countTicketsFromLocal ? JSON.parse(countTicketsFromLocal) : 0

  const countTicketsToLocal = localStorage.getItem("ticket_to_info")
  const countTicketsTo = countTicketsToLocal ? JSON.parse(countTicketsToLocal) : 0


  // const users = [
  //   departure: countTicketsFrom,
  //   arrival: countTicketsTo
  // ]

  

  // if (countTickets?.seats.length > 0) {
  //   return <>{countTickets?.seats.map((item: any) => <PassangerItem />)}</>
  // }
  return <div>Нет выбранных билетов</div>
}

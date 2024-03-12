import type React from "react"
import { PassangerItem } from "../PassangerItem"

export const PassengerRegistration: React.FC = () => {
  const countTicketsFromLocal = localStorage.getItem("ticket_from_info")
  const countTicketsFrom = countTicketsFromLocal
    ? JSON.parse(countTicketsFromLocal)
    : {}

  const countTicketsToLocal = localStorage.getItem("ticket_to_info")
  const countTicketsTo = countTicketsToLocal
    ? JSON.parse(countTicketsToLocal)
    : undefined
  const users = []

  if (countTicketsFrom?.seats && countTicketsTo !== undefined) {
    const maxTicketsCount = Math.max(
      countTicketsFrom?.seats.length,
      countTicketsTo?.seats.length,
    )

    for (let i = 0; i < maxTicketsCount; i++) {
      const fromTicket = countTicketsFrom.seats[i] || {}
      const toTicket = countTicketsTo.seats[i] || undefined

      users.push({ departure: fromTicket, arrival: toTicket })
    }
    JSON.stringify(localStorage.setItem("totalCount", countTicketsFrom.cost + countTicketsTo.cost))
  } else {
    for (const user of countTicketsFrom.seats) {
      users.push({ departure: user })
    }
    JSON.stringify(localStorage.setItem("totalCount", countTicketsFrom.cost))

  }

  console.log(users)

  if (users.length > 0) {
    return (
      <>
        {users.map((item: any, index: number) => (
          <PassangerItem key={item.departure.seat_number} numberPassenger={index + 1}/>
        ))}
      </>
    )
  }
  return <div>Нет выбранных билетов</div>
}

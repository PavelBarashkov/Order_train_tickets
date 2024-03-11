import type React from "react"
import classes from "./totalPrice.module.css"

export const TotalPrice: React.FC = () => {
  // const ticketFromLocal = localStorage.getItem("ticket_from_info")
  // const ticketFrom = ticketFromLocal ? JSON.parse(ticketFromLocal) : ""
  // const { cost: fromPrice } = ticketFrom

  // const ticketToLocal = localStorage.getItem("ticket_to_info")
  // const ticketTo = ticketToLocal ? JSON.parse(ticketToLocal) : ""
  // const { cost: toPrice } = ticketTo

  // const totalPrice = toPrice ? fromPrice + toPrice : fromPrice

  return (
    <div className={classes.container}>
      <div className={classes.containerPreview}>
        <div className={classes.containerPreviewDirectionTitle}>ИТОГ</div>
        {/* <div>{totalPrice}</div> */}
      </div>
    </div>
  )
}

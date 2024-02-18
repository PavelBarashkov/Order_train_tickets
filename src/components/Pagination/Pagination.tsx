import type React from "react"
import { Pagination as PaginationBoot } from "react-bootstrap"
import "./style.css"

let active = 1
let items: any = []
for (let number = 1; number <= 3; number++) {
  items.push(
    <PaginationBoot.Item key={number} active={number === active}>
      {number}
    </PaginationBoot.Item>,
  )
}

export const Pagination: React.FC = () => {
  return (
    <>
      <PaginationBoot size="lg">
        <PaginationBoot.Prev />
        {items}

        <PaginationBoot.Next />
      </PaginationBoot>
    </>
  )
}

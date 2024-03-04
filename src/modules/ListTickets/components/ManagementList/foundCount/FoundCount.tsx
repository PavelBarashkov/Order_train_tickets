import type React from "react"
import { useAppSelector } from "../../../../../app/hooks"
import type { RootState } from "../../../../../app/store"

export const FoundCount: React.FC = () => {
  const { total_count } = useAppSelector(
    (state: RootState) => state.listTickets,
  )
  return (
    <div>
      <span>найдено {total_count}</span>
    </div>
  )
}

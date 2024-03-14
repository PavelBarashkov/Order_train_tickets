import type React from "react"
import { useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { LastTicketItem } from "../LastTicketItem/LastTicketItem"

export const LastTickets: React.FC<any> = () => {
  const { tickets, loading, error } = useAppSelector(
    (state: RootState) => state.lastTickets,
  )

  return (
    <>
      {loading ? (
        <div>Загрузка</div>
      ) : (
        <>
          {error ? (
            <div>{error}</div>
          ) : (
            <>
            <h3 style={{marginTop: 30}}>ПОСЛЕДНИЕ БИЛЕТЫ</h3>
              {tickets.map((item: any, index: number) => (
                <LastTicketItem ticket={item} key={index} />
              ))}
            </>
          )}
        </>
      )}
    </>
  )
}

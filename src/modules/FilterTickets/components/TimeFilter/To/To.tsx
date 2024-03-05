import type React from "react"
import iconTo from "@assets/icons/to.png"
import { ContainerForDirection } from "../ContainerForDirection/ContainerForDirection"
import { TimeRange } from "../TimeRange/TimeRange"

export const To: React.FC = () => {
  return (
    <ContainerForDirection
      iconDirection={iconTo}
      title="Туда"
      inputTo={
        <TimeRange
          departure={{
            start: "start_departure_hour_from",
            end: "start_departure_hour_to",
          }}
        />
      }
      inputBack={
        <TimeRange
          departure={{
            start: "start_arrival_hour_from",
            end: "start_arrival_hour_to",
          }}
        />
      }
    />
  )
}

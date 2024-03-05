import type React from "react"
import { ContainerForDirection } from "../ContainerForDirection/ContainerForDirection"
import iconBack from "@assets/icons/Subtract (2).png"
import { TimeRange } from "../TimeRange/TimeRange"

export const Back: React.FC = () => {
  return (
    <ContainerForDirection
      iconDirection={iconBack}
      title="Обратно"
      inputTo={
        <TimeRange
          departure={{
            start: "end_departure_hour_from",
            end: "end_departure_hour_to",
          }}
        />
      }
      inputBack={
        <TimeRange
          departure={{
            start: "end_arrival_hour_from",
            end: "end_arrival_hour_to",
          }}
        />
      }
    />
  )
}

import type React from "react"
import { Fourth } from "../Fourth"
import { Third } from "../Third"
import { Second } from "../Second"
import { First } from "../First"

interface IPlanCoachProps {
  coach: any
  type: string
  seats: any
  direction: string
}

export const PlanCoach: React.FC<IPlanCoachProps> = ({
  coach,
  type,
  seats,
  direction,
}) => {
  if (type === "fourth") {
    return <Fourth coach={coach} seats={seats} direction={direction} />
  }

  if (type === "third") {
    return <Third coach={coach} seats={seats} direction={direction} />
  }

  if (type === "second") {
    return <Second coach={coach} seats={seats} direction={direction} />
  }

  if (type === "first") {
    return <First coach={coach} seats={seats} direction={direction} />
  }
}

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
  id_route: string
}

export const PlanCoach: React.FC<IPlanCoachProps> = ({
  coach,
  type,
  seats,
  direction,
  id_route,
}) => {
  if (type === "fourth") {
    return <Fourth coach={coach} seats={seats} direction={direction} id_route={id_route}/>
  }

  if (type === "third") {
    return <Third coach={coach} seats={seats} direction={direction} id_route={id_route}/>
  }

  if (type === "second") {
    return <Second coach={coach} seats={seats} direction={direction} id_route={id_route}/>
  }

  if (type === "first") {
    return <First coach={coach} seats={seats} direction={direction} id_route={id_route}/>
  }
}

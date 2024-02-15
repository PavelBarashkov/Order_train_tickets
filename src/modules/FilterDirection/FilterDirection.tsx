import React from "react"
import { Details } from "./components/Details/Details"
import { Parameters } from "./components/Parameters/Parameters"

export const FilterDirection = () => {
  const stage: number = 1

  return (
    <div>
      <aside>
        {stage === 1 ? (
          <div>
            <Parameters />
          </div>
        ) : (
          <div>
            <Details />
          </div>
        )}
      </aside>
    </div>
  )
}

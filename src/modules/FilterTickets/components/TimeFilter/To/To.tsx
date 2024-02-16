import type React from "react"
import iconTo from "@assets/icons/to.png"
import { ContainerForDirection } from "../ContainerForDirection/ContainerForDirection"
import { InputsField } from "@components"

export const To: React.FC = () => {
  return (
    <ContainerForDirection
      iconDirection={iconTo}
      title="Туда"
      inputTo={
        <InputsField.RangeInput
          name="to"
          placeholder=""
          max={24}
          min={0}
          step={1}
          typeInput="date"
        />
      }
      inputBack={
        <InputsField.RangeInput
          name="back"
          placeholder=""
          min={0}
          max={24}
          step={1}
          typeInput="date"
        />
      }
    />
  )
}

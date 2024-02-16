import type React from "react"
import { ContainerForDirection } from "../ContainerForDirection/ContainerForDirection"
import { InputsField } from "@components"
import iconBack from "@assets/icons/Subtract (2).png"

export const Back: React.FC = () => {
  return (
    <ContainerForDirection
      iconDirection={iconBack}
      title="Обратно"
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
          max={24}
          min={0}
          step={1}
          typeInput="date"
        />
      }
    />
  )
}

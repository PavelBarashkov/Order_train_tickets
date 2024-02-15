import type React from "react"
import classes from "./directionInputs.module.css"
import { InputsField } from "@components"
import iconReverse from "@assets/icons/reverse.png"

export const DirectionInputs: React.FC = () => {
  return (
    <div className={classes.inputs}>
      <div className={classes.input}>
        <InputsField.TextInput
          name="location"
          placeholder="Откуда"
          label="Направление"
        />
        <span />
      </div>
      <img src={iconReverse} alt="" />
      <div className={classes.input}>
        <InputsField.TextInput name="toLocation" placeholder="Куда" />
        <span />
      </div>
    </div>
  )
}

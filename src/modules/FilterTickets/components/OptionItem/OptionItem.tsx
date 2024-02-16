import type React from "react"
import classes from "./optionItem.module.css"
import { InputsField } from "@components"

interface OptionItemProps {
  item: {
    icon: string
    title: string
    name: string
  }
}

export const OptionItem: React.FC<OptionItemProps> = ({ item }) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemIcon}>
        <img src={item.icon} alt="" />
      </div>
      <div className={classes.itemTitle}>{item.title}</div>
      <div className={classes.itemInput}>
        <InputsField.SwitchInput name={item.name} placeholder="" />
      </div>
    </div>
  )
}

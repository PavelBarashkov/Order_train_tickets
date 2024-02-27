import type React from "react"
import classes from "./optionList.module.css"
import сompartment from "@assets/icons/compartment.png"
import plac from "@assets/icons/plac.png"
import sit from "@assets/icons/sit.png"
import star from "@assets/icons/star.png"
import wifi from "@assets/icons/wifi.png"
import express from "@assets/icons/express.png"

import { OptionItem } from "./OptionItem"

interface IOptionItem {
  icon: string
  label: string
  value: string
}

export const OptionsList: React.FC = () => {
  const data: IOptionItem[] = [
    {
      icon: сompartment,
      label: "Купе",
      value: "have_second_class",
    },
    {
      icon: plac,
      label: "Плацкарт",
      value: "have_third_class",
    },
    {
      icon: sit,
      label: "Сидячий",
      value: "have_fourth_class",
    },
    {
      icon: star,
      label: "Люкс",
      value: "have_first_class",
    },
    {
      icon: wifi,
      label: "Wi-Fi",
      value: "have_wifi",
    },
    {
      icon: express,
      label: "Экспресс",
      value: "have_express",
    },
  ]
  return (
    <div className={classes.optionsList}>
      {data &&
        data.map((item: IOptionItem) => (
          <OptionItem key={item.value} item={item} />
        ))}
    </div>
  )
}

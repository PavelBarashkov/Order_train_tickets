import type React from "react"
import classes from "./optionList.module.css"
import сompartment from "@assets/icons/compartment.png"
import plac from "@assets/icons/plac.png"
import sit from "@assets/icons/sit.png"
import star from "@assets/icons/star.png"
import wifi from "@assets/icons/wifi.png"
import express from "@assets/icons/express.png"

import { OptionItem } from "../OptionItem"

interface IOptionItem {
  icon: string
  title: string
  name: string
}

export const OptionsList: React.FC = () => {
  const data: IOptionItem[] = [
    {
      icon: сompartment,
      title: "Купе",
      name: "сompartment",
    },
    {
      icon: plac,
      title: "Плацкарт",
      name: "plac",
    },
    {
      icon: sit,
      title: "Сидячий",
      name: "sit",
    },
    {
      icon: star,
      title: "Люкс",
      name: "luxe",
    },
    {
      icon: wifi,
      title: "Wi-Fi",
      name: "wifi",
    },
    {
      icon: express,
      title: "Экспресс",
      name: "express",
    },
  ]
  return (
    <div className={classes.optionsList}>
      {data &&
        data.map((item: IOptionItem) => (
          <OptionItem key={item.name} item={item} />
        ))}
    </div>
  )
}

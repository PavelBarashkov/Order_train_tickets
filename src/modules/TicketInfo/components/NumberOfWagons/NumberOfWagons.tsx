import type React from "react"
import classes from "./numberOfWagons.module.css"

export const NumberOfWagons: React.FC = () => {
  //TODO Получает количесво вагонов. Вагон имеет номер и класс
  return (
    <div className={classes.NumberOfWagons}>
      <div className={classes.NumberOfWagonsList}>
        <div>Вагоны</div>
        {Array.from({ length: 4 }, (_, index) => (
          <div className={classes.inActive}>{index}</div>
        ))}
      </div>

      <div>Нумерация вагонов начинается с головы поезда</div>
    </div>
  )
}

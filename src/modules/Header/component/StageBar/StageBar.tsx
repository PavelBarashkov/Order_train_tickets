import React from "react"
import classes from "./stageBar.module.css"

export const StageBar = () => {
  const stage: number = 2
  const stages = ["Билеты", "Пассажиры", "Оплата", "Проверка"]
  const active = stage - 1
  return (
    <div
      className={classes.stageBar && stage === 4 ? classes.stageBar_yellow : classes.stageBar_gray}
    >
      <ul className={`${classes.stageBar_list} ${classes.stages_wrapper}`}>
        {stages.map((el, index) => (
          <li
            className={`
              ${classes.stageBar_list_item} 
              ${stage > index ? classes.passed : 'not_passed'}
              ${active === index ? classes.active : ""}
            `}
            key={el}
          >
            <span className={classes.stageBar_list_icon}>
              <span className={classes.stageBar_list_stage}>{index + 1}</span>
            </span>

            {el}
          </li>
        ))}
      </ul>
    </div>
  )
}

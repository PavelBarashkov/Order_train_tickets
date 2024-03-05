import type React from "react"
import classes from "./containerForDirection.module.css"
import { useState } from "react"

interface ContainerForDirectionProps {
  iconDirection: string
  title: string
  inputTo: React.ReactNode
  inputBack: React.ReactNode
}

export const ContainerForDirection: React.FC<ContainerForDirectionProps> = ({
  iconDirection,
  title,
  inputTo,
  inputBack,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false)

  const handlerBtn = () => {
    setIsShow(!isShow)
  }

  return (
    <div className={classes.filter}>
      <div className={classes.filterPreview}>
        <div className={classes.filterPreviewDirection}>
          <img src={iconDirection} alt="" />
          <div className={classes.filterPreviewDirectionTitle}>{title}</div>
        </div>
        <button
          onClick={handlerBtn}
          className={classes.filterPreviewBtn}
        ></button>
      </div>

      <div
        className={`${classes.filterInputs} ${isShow ? classes.active : null}`}
      >
        <div>
          <label className={classes.filterInputLabelTo}>Время отбытия </label>
          {inputTo}
        </div>
        <div className={classes.filterInput}>
          <label className={classes.filterInputLabelBack}>Время прибытия</label>
          {inputBack}
        </div>
      </div>
    </div>
  )
}

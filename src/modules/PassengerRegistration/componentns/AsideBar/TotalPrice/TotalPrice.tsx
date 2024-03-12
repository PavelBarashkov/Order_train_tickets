import type React from "react"
import classes from "./totalPrice.module.css"

export const TotalPrice: React.FC<any> = ({totalCount}) => {

  return (
    <div className={classes.container}>
      <div className={classes.containerPreview}>
        <div className={classes.containerPreviewDirectionTitle}>ИТОГ</div>
        <div className={classes.containerPreviewDirectionNumber}>{new Intl.NumberFormat("ru-RU").format(totalCount)} <span>&#8381;</span></div>
      </div>
    </div>
  )
}

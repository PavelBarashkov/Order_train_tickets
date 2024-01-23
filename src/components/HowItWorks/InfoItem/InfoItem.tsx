import type { IItem } from "../InfoList/InfoList"
import classes from "./infoItem.module.css"

export const InfoItem = ({ img, text }: IItem) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemHeader}>
        <img src={img} alt="картинка" />
      </div>
      <div className={classes.itemText}>{text}</div>
    </div>
  )
}

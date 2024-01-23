import classes from "./infoList.module.css"
import img1 from "../assets/ItemOne.png"
import img2 from "../assets/ItemTwo.png"
import img3 from "../assets/ItemThree.png"
import { InfoItem } from "../InfoItem/InfoItem"

export interface IItem {
  img: string
  text: string
}

export const InfoList = () => {
  const data = [
    {
      img: img1,
      text: `Удобный заказ на сайте`,
    },
    {
      img: img3,
      text: "Нет необходимости ехать в офис",
    },
    {
      img: img2,
      text: "Огромный выбор направлений",
    },
  ]

  return (
    <div className={classes.list}>
      {data.map((item: IItem) => (
        <InfoItem img={item.img} text={item.text} key={item.img} />
      ))}
    </div>
  )
}

import classes from "./slider.module.css"
import photo1 from "../assets/MaskGroupOne.png"
import photo2 from "../assets/MaskGroupTwo.png"
import { SliderItem } from "../SliderItem/SliderItem"
import ellipse from "../assets/Ellipse.png"
import ellipseActive from "../assets/EllipseActive.png"

export interface IUser {
  img: string
  name: string
  text: string
}

export const Slider = () => {
  const users: IUser[] = [
    {
      img: photo1,
      name: "Екатерина Вальнова",
      text: "Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.",
    },
    {
      img: photo2,
      name: "Евгений Стрыкало",
      text: "СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке.",
    },
  ]
  return (
    <div className={classes.container}>
      <div className={classes.commentsList}>
        {users.map((user: IUser) => (
          <SliderItem
            img={user.img}
            name={user.name}
            text={user.text}
            key={user.img}
          />
        ))}
      </div>
      <div className={classes.commentsIndicators}>
        <img src={ellipseActive} alt="" />
        {Array.from({ length: 4 }, (_, index) => (
          <img src={ellipse} alt="" key={index} />
        ))}
      </div>
    </div>
  )
}

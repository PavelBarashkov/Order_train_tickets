import classes from "./sliderItem.module.css"
import type { IUser } from "../Slider/Slider"
import img1 from "../assets/“.png"
import img2 from "../assets/”.png"

export const SliderItem: React.FC<IUser> = ({ img, name, text }) => {
  return (
    <div className={classes.sliderItem}>
      <div className={classes.sliderItemImg}>
        <img src={img} alt={name} />
      </div>
      <div className={classes.sliderItemUser}>
        <div className={classes.sliderItemUserName}>{name}</div>
        <div className={classes.sliderItemUserComment}>
          <img className={classes.img1} src={img1} alt="" /> {text}
          <img className={classes.img2} src={img2} alt="" />
        </div>
      </div>
    </div>
  )
}

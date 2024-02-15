import classes from "./social.module.css"
import img1 from "../../assets/Group (3).png"
import img2 from "../../assets/Group (4).png"
import img3 from "../../assets/Group (5).png"
import img4 from "../../assets/Group (6).png"
import img5 from "../../assets/Group (7).png"

export const Social = () => {
  const icons = [img1, img2, img3, img4, img5]

  return (
    <div className={classes.icons}>
      {icons.map((icon: string) => (
        <img src={icon} alt="" />
      ))}
    </div>
  )
}

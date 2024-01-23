import classes from "./contactItem.module.css"
import type { IContact } from "../Contacts/Contacts"

export const ContactItem = ({ img, info }: IContact) => {
  return (
    <div className={classes.contactItem}>
      <img className={classes.contactImg} src={img} alt="" />
      <span className={classes.contactInfo}>{info}</span>
    </div>
  )
}

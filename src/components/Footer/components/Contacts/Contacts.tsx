import classes from "./contact.module.css"
import { Title } from "../Title/Title"
import email from "../../assets/Email.png"
import location from "../../assets/Location.png"
import phone from "../../assets/Phone.png"
import skype from "../../assets/Skype.png"
import { ContactItem } from "../ContactItem/ContactItem"

export interface IContact {
  img: string
  info: string
}

export const Contacts = () => {
  const contacts: IContact[] = [
    {
      img: phone,
      info: "8 (800) 000 00 00",
    },
    {
      img: email,
      info: "inbox@mail.ru",
    },
    {
      img: skype,
      info: "tu.train.tickets",
    },
    {
      img: location,
      info: "г. Москва ул. Московская 27-35 555 555",
    },
  ]

  return (
    <div className={classes.contactsList}>
      <Title title={"Свяжитесь с нами"} />
      {contacts.map((contact: IContact) => (
        <ContactItem img={contact.img} info={contact.info} key={contact.img} />
      ))}
    </div>
  )
}

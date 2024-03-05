import classes from "./subscription.module.css"
import { Form } from "../Form/Form"
import { Title } from "../Title/Title"
import { Social } from "../Social/Social"

export const Subscription = () => {
  return (
    <div className={classes.subscription}>
      <Title title="Подписка" />
      <Form />
      <div>
        <Title title="Подписывайтесь на нас" />
        <Social />
      </div>
    </div>
  )
}

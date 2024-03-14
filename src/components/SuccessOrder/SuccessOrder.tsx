import type React from "react"
import classes from "./successOrder.module.css"
import iconEmail from "@assets/icons/iconEmail.png"
import iconTickets from "@assets/icons/IconTickets.png"
import iconPrintTicket from "@assets/icons/printTicket.png"
import iconStar from "@assets/icons/starSuccess.png"
import { useNavigate } from "react-router-dom"
import { MAIN_ROUTE } from "../../pages"

export const SuccessOrder: React.FC = () => {
  const totalCostLocal = localStorage.getItem("totalCount")
  const totalCost = totalCostLocal ? JSON.parse(totalCostLocal) : 0
  const navigate = useNavigate()

  return (
    <div className={classes.success_order_wrapper}>
      <h1 className={classes.success_order_title}>Благодарим Вас за заказ!</h1>

      <div className={classes.success_order}>
        <div className={classes.success_order__header}>
          <p className={classes.success_order__title}>№Заказа 285АА</p>

          <p className={classes.success_order__price}>
            сумма{" "}
            <span className={classes.success_order__value}>
              {new Intl.NumberFormat("ru-RU").format(totalCost)}{" "}
            </span>{" "}
            &#8381;
          </p>
        </div>

        <div className={classes.success_order__instructions}>
          <div className={classes.success_order__instruction}>
            <div className={classes.success_order__instruction_icon}>
              <img
                src={iconEmail}
                alt="билеты будут отправлены
                  на ваш e-mail"
              />
            </div>

            <p className={classes.success_order__instruction_text}>
              билеты будут
              <br />
              отправлены
              <br />
              на ваш <strong>e-mail</strong>
            </p>
          </div>

          <div className={classes.success_order__instruction}>
            <div className={classes.success_order__instruction_icon}>
              <img
                src={iconTickets}
                alt="распечатайте
                  и сохраняйте билеты
                  до даты поездки"
              />
            </div>

            <p className={classes.success_order__instruction_text}>
              <strong>распечатайте </strong>
              <br />
              и сохраняйте билеты
              <br />
              до даты поездки
            </p>
          </div>

          <div className={classes.success_order__instruction}>
            <div className={classes.success_order__instruction_icon}>
              <img
                src={iconPrintTicket}
                alt="предъявите распечатанные
                  билеты при посадке"
              />
            </div>

            <p className={classes.success_order__instruction_text}>
              <strong>предъявите </strong>
              <br />
              распечатанные
              <br />
              билеты при посадке
            </p>
          </div>
        </div>

        <div className={classes.success_order__message}>
          <h3 className={classes.success_order__message_title}></h3>

          <p className={classes.success_order__message_text}>
            Ваш заказ успешно оформлен.
            <br />В ближайшее время с вами свяжется наш оператор для
            подтверждения.
          </p>

          <p className={classes.success_order__message_text}>
            <strong>
              Благодарим Вас за оказанное доверие и желаем приятного
              путешествия!
            </strong>
          </p>
        </div>

        <div className={classes.success_order__footer}>
          <div className={classes.success_order__footer_form}>
            <p className={classes.success_order__footer_title}>
              Оценить сервис
            </p>

            <div className={classes.success_order__footer_icons}>
              {Array.from({ length: 5 }, (_, index) => (
                <img src={iconStar} key={index} alt="Оценить сервис" />
              ))}
            </div>
          </div>

          <button
            type="button"
            className={classes.success_order__footer_button}
            onClick={() => navigate(MAIN_ROUTE)}
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  )
}

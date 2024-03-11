import type React from "react"
import classes from "./confirmation.module.css"
import { useState } from "react"
import iconUser from "@assets/icons/user.png"

export const Confirmation: React.FC = () => {
  const [type, setType] = useState("adult")
  const [sex, setSex] = useState("male")
  const [pay, setPay] = useState("cash")

  return (
    <div>
      <div className={classes.verification_section}>
        <h4 className={classes.verification_title}>Поезд</h4>
        {/* <TrainCard key={nanoid()} train={train} option="verification" /> */}
        <div>Тут будет карточка</div>
      </div>

      <div className={classes.verification_section}>
        <h4 className={classes.verification_title}>Пассажиры</h4>

        <div className={classes.verification_passenger}>
          <div className={classes.verification_passenger_persons}>
            <div className={classes.passenger_card}>
              <div className={classes.passenger_card_header}>
                <img src={iconUser} alt="passenger" />

                <h5 className={classes.passenger_card_title}>
                  {type === "adult" ? "Взрослый" : "Детский"}
                </h5>
              </div>

              <div className={classes.passenger_card_content}>
                <h6 className={classes.passenger_card_content_title}></h6>

                <p className={classes.passenger_card_content_text}>
                  Пол {sex === "male" ? "мужской" : "женский"}
                </p>

                <p className={classes.passenger_card_content_text}>
                  Дата рождения
                </p>

                <p className={classes.passenger_card_content_text}>
                  {type === "adult"
                    ? `Паспорт РФ  `
                    : `Свидетельство о рождении `}
                </p>
              </div>
            </div>
          </div>

          <div className={classes.verification_price}>
            <div className={classes.verification_price_wrapper}>
              <p className={classes.verification_price_name}>Всего</p>

              <span className={classes.verification_price_sum_value}>
                7000 р
              </span>
            </div>

            <button type="button" className={classes.verification_button}>
              Изменить
            </button>
          </div>
        </div>
      </div>

      <div className={classes.verification_section}>
        <h4 className={classes.verification_title}>Способ оплаты</h4>

        <div className={classes.verification_content}>
          <div className={classes.verification_payment}>
            {pay === "cash" ? "Наличными" : "Онлайн"}
          </div>

          <div className={classes.verif_payment_btn_wrapper}>
            <button
              type="button"
              className={`${classes.verification_button} ${classes.verification_payment_button}`}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

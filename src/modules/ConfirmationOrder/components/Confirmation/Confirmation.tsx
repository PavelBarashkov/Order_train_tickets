import type React from "react"
import classes from "./confirmation.module.css"
import iconUser from "@assets/icons/user.png"
import { CardTicket } from "../../../ListTickets/components/CardTicket"
import { useNavigate } from "react-router-dom"
import {
  PASSENGER_ROUTER,
  PAYMENT_ORDER_ROUTE,
  SUCCESS_ORDER_ROUTE,
} from "../../../../pages/helpers/const/const"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { order } from "../../slice/paySlice"
import type { RootState } from "../../../../app/store"
import { useEffect } from "react"

export const Confirmation: React.FC = () => {
  const ticketLocal = localStorage.getItem("train_info")
  const ticket = ticketLocal ? JSON.parse(ticketLocal) : {}

  const usersArrivalLocal = localStorage.getItem("arrival_tickets")
  const usersInfoArrival = usersArrivalLocal
    ? JSON.parse(usersArrivalLocal)
    : undefined

  const usersLocal = localStorage.getItem("departure_tickets")
  const usersInfoDeparture = usersLocal ? JSON.parse(usersLocal) : {}

  const totalCostLocal = localStorage.getItem("totalCount")
  const totalCost = totalCostLocal ? JSON.parse(totalCostLocal) : 0

  const userPayLocal = localStorage.getItem("formPay")
  const userPay = userPayLocal ? JSON.parse(userPayLocal) : {}
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const user = {
    user: userPay,
    departure: usersInfoDeparture,
    arrival: usersInfoArrival,
  }

  const { status } = useAppSelector((state: RootState) => state.payOrder)

  useEffect(() => {
    if (status) {
      navigate(`/${SUCCESS_ORDER_ROUTE}`)
    }
  }, [status])

  return (
    <div>
      <div className={classes.verification_section}>
        <h4 className={classes.verification_title}>Поезд</h4>
        <CardTicket ticket={ticket} />
      </div>

      <div className={classes.verification_section}>
        <h4 className={classes.verification_title}>Пассажиры</h4>

        <div className={classes.verification_passenger}>
          <div className={classes.verification_passenger_persons}>
            {usersInfoDeparture.seats.map((item: any, index: number) => (
              <div key={index} className={classes.passenger_card}>
                <div className={classes.passenger_card_header}>
                  <img src={iconUser} alt="passenger" />

                  <h5 className={classes.passenger_card_title}>
                    {item.person_info.is_adult ? "Взрослый" : "Детский"}
                  </h5>
                </div>

                <div className={classes.passenger_card_content}>
                  <h6 className={classes.passenger_card_content_title}></h6>

                  <p className={classes.passenger_card_content_text}>
                    Пол {item.person_info.gender ? "мужской" : "женский"}
                  </p>

                  <p className={classes.passenger_card_content_text}>
                    Дата рождения
                  </p>

                  <p className={classes.passenger_card_content_text}>
                    {item.person_info.is_adult
                      ? `Паспорт РФ  ${item.person_info.document_data}`
                      : `Свидетельство о рождении ${item.person_info.document_data}`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={classes.verification_price}>
            <div className={classes.verification_price_wrapper}>
              <p className={classes.verification_price_name}>Всего</p>

              <span className={classes.verification_price_sum_value}>
                {new Intl.NumberFormat("ru-RU").format(totalCost)} &#8381;
              </span>
            </div>

            <button
              type="button"
              className={classes.verification_button}
              onClick={() => {
                navigate(`/${PASSENGER_ROUTER}`)
              }}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>

      <div className={classes.verification_section}>
        <h4 className={classes.verification_title}>Способ оплаты</h4>

        <div className={classes.verification_content}>
          <div className={classes.verification_payment}>
            {userPay.payment_method === "cash" ? "Наличными" : "Онлайн"}
          </div>

          <div className={classes.verif_payment_btn_wrapper}>
            <button
              type="button"
              className={`${classes.verification_button} ${classes.verification_payment_button}`}
              onClick={() => navigate(`/${PAYMENT_ORDER_ROUTE}`)}
            >
              Изменить
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => dispatch(order(user))}>dfd</button>
    </div>
  )
}

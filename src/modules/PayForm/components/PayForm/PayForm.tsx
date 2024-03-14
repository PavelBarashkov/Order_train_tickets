import type React from "react"
import classes from "./payFrom.module.css"
import { Formik, Form as FormForFormik, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import "yup-phone-lite"
import { useNavigate } from "react-router-dom"
import { CONFIRMATION_ORDER_ROUTE } from "../../../../pages/helpers/const/const"

export const PayForm: React.FC = () => {
  const navigate = useNavigate();
  const userPayLocal = localStorage.getItem("formPay")
  const userPay = userPayLocal ? JSON.parse(userPayLocal) : {}

  return (
    <Formik
      initialValues={{
        last_name: userPay ? userPay.last_name : '',
        first_name: userPay ? userPay.last_name : '',
        patronymic: userPay ? userPay.patronymic : '',
        phone: userPay ? userPay.phone : '',
        email: userPay ? userPay.email : '',
        payment_method: userPay ? userPay.payment_method : '',
      }}
      validationSchema={Yup.object().shape({
        last_name: Yup.string()
          .min(2, "Некорректная фамилия")
          .required("Заполните фамилию"),
        first_name: Yup.string()
          .min(2, "Некорректное имя")
          .required("Заполните имя"),
        patronymic: Yup.string()
          .min(2, "Некорректное отчество")
          .required("Заполните отчество"),
        phone: Yup.string()
          .phone("RU", "Некорректный номер")
          .required("Заполните номер телефона"),
        email: Yup.string()
          .email("Некорректный E-mail")
          .required("Заполните E-mail"),
        payment_method: Yup.string().required("Выберете способ оплаты"),
      })}
      onSubmit={values => {
        navigate(`/${CONFIRMATION_ORDER_ROUTE}`)
        localStorage.setItem("formPay", JSON.stringify(values))
      }}
    >
      <FormForFormik>
        <div className={classes.pay_form_form} id="payform">
          <h4 className={classes.pay_form_title}>Персональные данные</h4>

          <div className={classes.pay_form_wrapper}>
            <div
              className={`${classes.pay_form_controls} ${classes.payForm_controls__name}`}
            >
              <label className={classes.pay_form_label} htmlFor="last_name">
                Фамилия
                <Field
                  as="input"
                  name="last_name"
                  className={classes.pay_form_field}
                />
                <div className={classes.error}>
                  <ErrorMessage name="last_name" />
                </div>
              </label>

              <label className={classes.pay_form_label} htmlFor="name">
                Имя
                <Field
                  name="first_name"
                  type="text"
                  className={classes.pay_form_field}
                />
                <div className={classes.error}>
                  <ErrorMessage name="first_name" />
                </div>
              </label>

              <label className={classes.pay_form_label} htmlFor="last-name">
                Отчество
                <Field
                  type="text"
                  name="patronymic"
                  className={classes.pay_form_field}
                />
                <div className={classes.error}>
                  <ErrorMessage name="patronymic" />
                </div>
              </label>
            </div>

            <div
              className={`${classes.pay_form_controls} ${classes.pay_form_controls_contacts}`}
            >
              <label
                className={`${classes.pay_form_label} ${classes.pay_form_label_contact}`}
                htmlFor="phone"
              >
                Контактный телефон
                <Field
                  type="tel"
                  name="phone"
                  placeholder="+7 ___ ___ __ __"
                  className={`${classes.pay_form_field} ${classes.payForm_field_contact}`}
                />
                <div className={classes.error}>
                  <ErrorMessage name="phone" />
                </div>
              </label>

              <label
                className={`${classes.pay_form_label} ${classes.pay_form_label_contact}`}
                htmlFor="email"
              >
                E-mail
                <Field
                  type="email"
                  name="email"
                  placeholder="inbox@gmail.ru"
                  className={`${classes.pay_form_field} ${classes.payForm_field_contact}`}
                />
                <div className={classes.error}>
                  <ErrorMessage name="email" />
                </div>
              </label>
            </div>
          </div>

          <div>
            <h4
              className={`${classes.pay_form_title} ${classes.pay_form_title_repeat}`}
            >
              Способ оплаты
            </h4>

            <div className={classes.pay_form_controls_group}>
              <Field
                id="online"
                type="radio"
                name="payment_method"
                value="online"
                className={classes.pay_form_field_control}
              />

              <label
                className={`${classes.pay_form_label} ${classes.pay_form_label_radio}`}
                htmlFor="online"
              >
                Онлайн
              </label>
              <div className={classes.error}>
                <ErrorMessage name="payment_method" />
              </div>

              <ul className={classes.pay_form_pay_list}>
                <li className={classes.pay_form_pay_item}>
                  Банковской
                  <br />
                  картой
                </li>

                <li className={classes.pay_form_pay_item}>PayPal</li>
                <li className={classes.pay_form_pay_item}>Visa QIWI Wallet</li>
              </ul>
            </div>

            <div className={classes.pay_form_controls_group}>
              <Field
                type="radio"
                id="cash"
                name="payment_method"
                value="cash"
                className={classes.pay_form_field_control}
              />

              <label
                className={`${classes.pay_form_label} ${classes.pay_form_label_radio}`}
                htmlFor="cash"
              >
                Наличными
              </label>
              <div className={classes.error}>
                <ErrorMessage name="payment_method" />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.btnContainer}>
          <button className={classes.btn} type="submit">
            КУПИТЬ БИЛЕТЫ
          </button>
        </div>
      </FormForFormik>
    </Formik>
  )
}

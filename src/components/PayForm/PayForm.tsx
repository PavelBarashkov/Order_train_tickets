import type React from "react"
import classes from "./payFrom.module.css"

export const PayForm: React.FC = () => {
  return (
    <div>
      <div className={classes.pay_form_form} id="payform">
        <h4 className={classes.pay_form_title}>Персональные данные</h4>

        <div className={classes.pay_form_wrapper}>
          <div
            className={`${classes.pay_form_controls} ${classes.payForm_controls__name}`}
          >
            <label className={classes.pay_form_label} htmlFor="surname">
              Фамилия
              <input
                className={classes.pay_form_field}
                id="surname"
                name="surname"
                type="text"
                //   value={form.surname}
                //   onChange={handleChange}
              />
            </label>

            <label className={classes.pay_form_label} htmlFor="name">
              Имя
              <input
                className={classes.pay_form_field}
                id="name"
                name="name"
                type="text"
                //   value={form.name}
                //   onChange={handleChange}
              />
            </label>

            <label className={classes.pay_form_label} htmlFor="last-name">
              Отчество
              <input
                className={classes.pay_form_field}
                id="last-name"
                name="lastname"
                type="text"
                //   value={form.lastname}
                //   onChange={handleChange}
              />
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
              <input
                className={`${classes.pay_form_field} ${classes.payForm_field_contact}`}
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 ___ ___ __ __"
                //   value={form.phone}
                //   maxLength="12"
                //   onChange={onChangePhone}
                required
              />
            </label>

            <label
              className={`${classes.pay_form_label} ${classes.pay_form_label_contact}`}
              htmlFor="email"
            >
              E-mail
              <input
                className={`${classes.pay_form_field} ${classes.payForm_field_contact}`}
                id="email"
                name="email"
                type="email"
                placeholder="inbox@gmail.ru"
                //   value={form.email}
                //   onChange={handleChange}
                required
              />
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
            <input
              className={classes.pay_form_field_control}
              type="radio"
              name="payment"
              id="online"
              // checked={form.pay === 'online'}
              // onChange={handleRadio}
            />

            <label
              className={`${classes.pay_form_label} ${classes.pay_form_label_radio}`}
              htmlFor="online"
            >
              Онлайн
            </label>

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
            <input
              className={classes.pay_form_field_control}
              type="radio"
              name="payment"
              id="cash"
              // checked={form.pay === 'cash'}
              // onChange={handleRadio}
            />

            <label
              className={`${classes.pay_form_label} ${classes.pay_form_label_radio}`}
              htmlFor="cash"
            >
              Наличными
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

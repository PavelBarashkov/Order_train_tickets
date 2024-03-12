import type React from "react"
import classes from "./passangerItem.module.css"
import { useState } from "react"

export const PassangerItem: React.FC = () => {
  const [active, setActive] = useState(true)
  const [isChecked, setIsChecked] = useState(true)
  const [type, isType] = useState("adult")
  const [documentType, setDocumentType] = useState("passport")
  const [errorMessage, setErrorMessage] = useState(false)
  const [passenger, setPassenger] = useState(false)

  const handleShow = () => {
    setActive(prev => !prev)
  }

  return (
    <div className={classes.card}>
      <div
        className={`${classes.passenger_header} ${active ? classes.active_form : ""}`}
      >
        <h4
          className={`${classes.title} ${classes.title_small} ${classes.passenger_title}`}
        >
          <span
            className={`${classes.passenger_toggle} ${active ? classes.hide : classes.show}`}
            onClick={handleShow}
          />
          Пассажир 1
        </h4>

        <button type="button" className={classes.passenger_delete__button} />
      </div>
      <div
        className={`${classes.passengerForm_form} ${active ? classes.passengerForm_active : classes.passengerForm_hide}`}
      >
        <div className={classes.passengerForm_section}>
          <select
            className={`${classes.passengerForm_field} ${classes.passengerForm_list}`}
            // disabled
          >
            <option className={classes.passengerForm_item} value="">
              Взрослый
            </option>

            <option className={classes.passengerForm_item} value="">
              Детский
            </option>
          </select>

          <div className={classes.passengerForm_controls}>
            <label
              className={classes.passengerForm_label}
              //   htmlFor={`surname${number}`}
            >
              Фамилия
              <input
                className={`${classes.passengerForm_field} ${classes.passengerForm_field_name}`}
                // id={`surname${number}`}
                type="text"
                name="surname"
                // value={form.surname}
                // onChange={handleChange}
              />
            </label>

            <label
              className={classes.passengerForm_label}
              //   htmlFor={`name${number}`}
            >
              Имя
              <input
                className={`${classes.passengerForm_field} ${classes.passengerForm_field_name}`}
                // id={`name${number}`}
                type="text"
                name="name"
                // value={form.name}
                // onChange={handleChange}
              />
            </label>

            <label
              className={classes.passengerForm_label}
              //   htmlFor={`lastname${number}`}
            >
              Отчество
              <input
                className={`${classes.passengerForm_field} ${classes.passengerForm_field_name}`}
                // id={`lastname${number}`}
                type="text"
                name="lastname"
                // value={form.lastname}
                // onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div
          className={`${classes.passengerForm_controls} ${classes.passengerForm_section} ${classes.radio_group}`}
        >
          <div className={classes.passengerForm_radio_group}>
            <p className={classes.passengerForm_label}>Пол</p>

            <div className={classes.passengerForm_radio_controls}>
              <input
                className={classes.passengerForm_radio_field}
                // id={`male${number}`}
                data-id="male"
                // name={`sex${number}`}
                type="radio"

                // checked={form.sex === 'male'}
                // onChange={handleRadio}
              />

              <label
                className={`${classes.passengerForm_radio_label} ${classes.passengerForm_radio_label__male}`}
                // htmlFor={`male${number}`}
              >
                М
              </label>

              <input
                className={classes.passengerForm_radio_field}
                // id={`female${number}`}
                data-id="female"
                // name={`sex${number}`}
                type="radio"
                // checked={form.sex === 'female'}
                checked={isChecked}
                // onChange={handleRadio}
              />

              <label
                className={`${classes.passengerForm_radio_label} ${classes.passengerForm_radio_label__female}`}
                // htmlFor={`female${number}`}
              >
                Ж
              </label>
            </div>
          </div>

          <label
            className={classes.passengerForm_label}
            // htmlFor={`birth${number}`}
          >
            Дата рождения
            <input
              className={classes.passengerForm_field}
              //   id={`birth${number}`}
              type="date"
              placeholder="ДД/ММ/ГГ"
              name="birth"
              //   value={form.birth}
              //   onChange={handleChange}
              //   max={moment().format('YYYY-MM-DD')}
            />
          </label>
        </div>

        <div
          className={`${classes.passengerForm_controls} ${classes.passengerForm_section} ${classes.checkbox_control}`}
        >
          <input className={classes.passengerForm_checkbox} type="checkbox" />

          <p className={classes.passengerForm_checkbox_label}>
            ограниченная подвижность
          </p>
        </div>

        <div className={classes.passengerForm_section}>
          <div className={classes.passengerForm_document}>
            <label className={classes.passengerForm_label}>
              Тип документа
              <select
                className={`${classes.passengerForm_field} ${classes.passengerForm_list} ${classes.passengerForm_list__passport}`}
                // value={documentType}
                // onChange={(event) =>
                //   setDocumentType(event.target.value)
                // }
              >
                <option className={classes.passengerForm_item} value="passport">
                  Паспорт РФ
                </option>

                {type !== "adult" ? (
                  <option
                    className={classes.passengerForm_item}
                    value="certificate"
                  >
                    Свидетельство о рождении
                  </option>
                ) : (
                  ""
                )}
              </select>
            </label>

            {documentType === "passport" && (
              <label
                className={classes.passengerForm_label}
                // htmlFor={`series${number}`}
              >
                Серия
                <input
                  className={`${classes.passengerForm_field} ${classes.passengerForm_field__document}`}
                  //   id={`series${number}`}
                  type="text"
                  placeholder="_ _ _ _"
                  name="series"
                  maxLength={4}
                  //   maxLength="4"
                  //   value={form.series}
                  //   onChange={handleChange}
                />
              </label>
            )}

            <label
              className={classes.passengerForm_label}
              //   htmlFor={`document${number}`}
            >
              Номер
              <input
                className={`${classes.passengerForm_field} ${classes.passengerForm_field__document}`}
                // id={`document${number}`}
                type="text"
                placeholder={
                  documentType === "passport"
                    ? "_ _ _ _ _ _"
                    : "Пример, III-ET 545454"
                }
                maxLength={documentType === "passport" ? 6 : 13}
                name="document"
                // value={form.document}
                // onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div
          className={`${classes.passengerForm_footer} ${passenger ? classes.passengerForm_section_done : ""} ${errorMessage ? classes.warning : ""}`}
        >
          {passenger && (
            <div className={classes.passengerForm_massage}>
              <span className={classes.massage_done_img} />
              <span className={classes.massage_done}>Готово</span>
            </div>
          )}

          {errorMessage ? (
            <div className={classes.passengerForm_massage}>
              <span className={classes.massage_warning_img} />
              <span className={classes.massage_warning}>{errorMessage}</span>
            </div>
          ) : (
            <button
              type="button"
              className={`${classes.button} ${classes.passengerForm_button}`}
              // onClick={onSubmit}
            >
              Следующий пассажир
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

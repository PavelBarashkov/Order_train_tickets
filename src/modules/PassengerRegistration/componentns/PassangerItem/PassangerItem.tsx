import type React from "react"
import classes from "./passangerItem.module.css"
import { useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { useAppDispatch } from "../../../../app/hooks"
import { updateUser } from "../../slice/passengerSlice"

export const PassangerItem: React.FC<any> = ({
  numberPassenger,
  index,
  user,
}) => {
  const [active, setActive] = useState(true)
  const [passenger, setPassenger] = useState(false)
  const dispatch = useAppDispatch()

  const handleShow = () => {
    setActive(prev => !prev)
  }
  return (
    <>
      <Formik
        initialValues={{
          age: user === null ? "adult" : user.is_adult ? "adult" : "children",
          surname: user === null ? "" : user.last_name,
          first_name: user === null ? "" : user.first_name,
          middleName: user === null ? "" : user.patronymic,
          sex: user === null ? "man" : user.gender ? "man" : "woman",
          dateOfBirth: user === null ? undefined : user.birthday,
          limitedMobility: false,
          documentType: user === null ? "passport" : user.document_type,
          series: "",
          numberDocument: user === null ? undefined : user.document_data,
        }}
        validationSchema={Yup.object().shape({
          age: Yup.string(),
          surname: Yup.string()
            .min(2, "Некорректная фамилия")
            .required("Заполните фамилию"),
          first_name: Yup.string()
            .min(2, "Некорректное имя")
            .required("Заполните имя"),
          middleName: Yup.string()
            .min(2, "Некорректное отчество")
            .required("Заполните отчество"),
          dateOfBirth: Yup.string().required("Укажите день рождения"),
          series: Yup.string().when("documentType", {
            is: "passport",
            then: schema =>
              schema
                .min(4, "Серия паспорта указана некорректно")
                .required("Заполните серию"),
          }),
          numberDocument: Yup.string().when("documentType", {
            is: "passport",
            then: schema =>
              schema
                .min(4, "Номер паспорта указан некорректно")
                .required("Заполните номер паспорта"),
            otherwise: schema =>
              schema
                .min(4, "Номер свидетельства о рожденни указан некорректно")
                .required("Заполните свидетельства о рожденни"),
          }),
        })}
        onSubmit={values => {
          setPassenger(active)
          dispatch(updateUser({ index, data: values }))
        }}
      >
        {({ errors, touched, values }) => (
          <Form>
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
                  Пассажир {numberPassenger}
                </h4>

                <button
                  type="button"
                  className={classes.passenger_delete__button}
                  disabled
                />
              </div>
              <div
                className={`${classes.passengerForm_form} ${active ? classes.passengerForm_active : classes.passengerForm_hide}`}
              >
                <div className={classes.passengerForm_section}>
                  <Field
                    as="select"
                    name="age"
                    className={`${classes.passengerForm_field} ${classes.passengerForm_list}`}
                  >
                    <option
                      className={classes.passengerForm_item}
                      value="adult"
                    >
                      Взрослый
                    </option>
                    <option
                      className={classes.passengerForm_item}
                      value="children"
                    >
                      Детский
                    </option>
                  </Field>

                  <div className={classes.passengerForm_controls}>
                    <label className={classes.passengerForm_label}>
                      Фамилия
                      <Field
                        as="input"
                        className={`${classes.passengerForm_field} ${classes.passengerForm_field_name}`}
                        name="surname"
                      />
                      <div className={classes.error}>
                        <ErrorMessage name="surname" />
                      </div>
                    </label>

                    <label className={classes.passengerForm_label}>
                      Имя
                      <Field
                        className={`${classes.passengerForm_field} ${classes.passengerForm_field_name}`}
                        as="input"
                        name="first_name"
                      />
                      <div className={classes.error}>
                        <ErrorMessage name="first_name" />
                      </div>
                    </label>

                    <label className={classes.passengerForm_label}>
                      Отчество
                      <Field
                        className={`${classes.passengerForm_field} ${classes.passengerForm_field_name}`}
                        as="input"
                        name="middleName"
                      />
                      <div className={classes.error}>
                        <ErrorMessage name="middleName" />
                      </div>
                    </label>
                  </div>
                </div>

                <div
                  className={`${classes.passengerForm_controls} ${classes.passengerForm_section} ${classes.radio_group}`}
                >
                  <div className={classes.passengerForm_radio_group}>
                    <p className={classes.passengerForm_label}>Пол</p>

                    <div className={classes.passengerForm_radio_controls}>
                      <Field
                        className={classes.passengerForm_radio_field}
                        id={`man-${numberPassenger}`}
                        name="sex"
                        type="radio"
                        value="man"
                        onClick={() => console.log(numberPassenger)}
                      />

                      <label
                        htmlFor={`man-${numberPassenger}`}
                        className={`${classes.passengerForm_radio_label} ${classes.passengerForm_radio_label__male}`}
                      >
                        М
                      </label>

                      <Field
                        className={classes.passengerForm_radio_field}
                        name="sex"
                        id={`woman-${numberPassenger}`}
                        type="radio"
                        value="woman"
                      />

                      <label
                        htmlFor={`woman-${numberPassenger}`}
                        className={`${classes.passengerForm_radio_label} ${classes.passengerForm_radio_label__female}`}
                      >
                        Ж
                      </label>
                    </div>
                  </div>

                  <label className={classes.passengerForm_label}>
                    Дата рождения
                    <Field
                      className={classes.passengerForm_field}
                      type="date"
                      placeholder="ДД/ММ/ГГ"
                      name="dateOfBirth"
                    />
                    <div className={classes.error}>
                      <ErrorMessage name="dateOfBirth" />
                    </div>
                  </label>
                </div>

                <div
                  className={`${classes.passengerForm_controls} ${classes.passengerForm_section} ${classes.checkbox_control}`}
                >
                  <Field
                    className={classes.passengerForm_checkbox}
                    type="checkbox"
                    name="limitedMobility"
                  />

                  <p className={classes.passengerForm_checkbox_label}>
                    ограниченная подвижность
                  </p>
                </div>

                <div className={classes.passengerForm_section}>
                  <div className={classes.passengerForm_document}>
                    <label className={classes.passengerForm_label}>
                      Тип документа
                      <Field
                        as="select"
                        name="documentType"
                        className={`${classes.passengerForm_field} ${classes.passengerForm_list} ${classes.passengerForm_list__passport}`}
                      >
                        <option
                          className={classes.passengerForm_item}
                          value="passport"
                        >
                          Паспорт РФ
                        </option>

                        {values.age !== "adult" ? (
                          <option
                            className={classes.passengerForm_item}
                            value="certificate"
                          >
                            Свидетельство о рождении
                          </option>
                        ) : (
                          ""
                        )}
                      </Field>
                    </label>

                    {values.documentType === "passport" && (
                      <label className={classes.passengerForm_label}>
                        Серия
                        <Field
                          className={`${classes.passengerForm_field} ${classes.passengerForm_field__document}`}
                          type="text"
                          placeholder="_ _ _ _"
                          name="series"
                          maxLength={4}
                        />
                        <div className={classes.error}>
                          <ErrorMessage name="series" />
                        </div>
                      </label>
                    )}

                    <label className={classes.passengerForm_label}>
                      Номер
                      <Field
                        className={`${classes.passengerForm_field} ${classes.passengerForm_field__document}`}
                        type="text"
                        placeholder={"_ _ _ _ _ _"}
                        maxLength={6}
                        name="numberDocument"
                      />
                    </label>
                  </div>
                </div>

                <div
                  className={`${classes.passengerForm_footer} ${passenger ? classes.passengerForm_section_done : ""} ${errors.numberDocument && touched.numberDocument ? classes.warning : ""}`}
                >
                  {passenger && (
                    <div className={classes.passengerForm_massage}>
                      <span className={classes.massage_done_img} />
                      <span className={classes.massage_done}>Готово</span>
                    </div>
                  )}

                  {errors.numberDocument && touched.numberDocument ? (
                    <div className={classes.passengerForm_massage}>
                      <span className={classes.massage_warning_img} />
                      <span className={classes.massage_warning}>
                        <ErrorMessage name="numberDocument" />
                      </span>
                    </div>
                  ) : (
                    <button
                      type="submit"
                      className={`${classes.button} ${classes.passengerForm_button}`}
                    >
                      Следующий пассажир
                    </button>
                  )}
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

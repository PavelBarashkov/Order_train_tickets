import { useState } from "react"
import { subscribe } from "../../../../API"
import classes from "./form.module.css"
import { Formik } from "formik"

export const Form = () => {
  const [isSubscribe, setSubscribe] = useState<boolean>(false)
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={values => {
        const errors: any = {}
        if (!values.email) {
          errors.email = "Заполните поле"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Неверный формат E-mail"
        }
        return errors
      }}
      onSubmit={async values => {
        await subscribe(values.email).then(data => {
          if (data.status === 200) {
            setSubscribe(true)
          }
        })
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <label className={classes.label} htmlFor="email">
            Будьте в курсе событий
          </label>
          <div className={classes.container}>
            <input
              className={classes.input}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={e => {
                errors.email = " "
              }}
              value={values.email}
            />

            <button
              className={classes.btn}
              type="submit"
              disabled={isSubmitting}
            >
              ОТПРАВИТЬ
            </button>
          </div>
          {errors.email && touched.email && errors.email && (
            <div style={{ color: "red" }}>{errors.email}</div>
          )}
          {isSubscribe && <div style={{ color: "green" }}>Готово!</div>}
        </form>
      )}
    </Formik>
  )
}

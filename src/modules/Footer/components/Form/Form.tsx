import classes from "./form.module.css"
import { Formik } from "formik"

export const Form = () => {
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
          errors.email = "Invalid email address"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
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
          <div style={{ color: "red" }}>
            {errors.email && touched.email && errors.email}
          </div>
        </form>
      )}
    </Formik>
  )
}

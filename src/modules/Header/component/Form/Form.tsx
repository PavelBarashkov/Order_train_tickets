import { MyInput } from "../../../../UI/MyInput/MyInput"
import classes from "./form.module.css"
import { Formik } from "formik"
import iconRevers from "../../assets/ic_cached_white_48dp.png"
import iconGeo from "../../assets/geo.png"
import iconDate from "../../assets/date.png"
import DatePicker from "react-datepicker"
import ru from "date-fns/locale/ru"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { MAIN_ROUTE } from "../../../../pages/helpers/const/const"

export const Form = () => {
  const [startDate, setStartDate] = useState(undefined)
  const [willDate, setWillDate] = useState(undefined)
  const location = useLocation()
  const isMain = location.pathname === MAIN_ROUTE

  if (isMain) {
    return (
      <Formik
        initialValues={{
          location: "",
          toLocation: "",
          nowDate: "",
          willDate: "",
        }}
        validate={values => {
          const errors: any = {}
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
          <form className={classes.form} onSubmit={handleSubmit}>
            <div>
              <label className={classes.formLabel}>Направление</label>
              <div className={classes.inputs}>
                <div className={classes.formInput}>
                  <MyInput
                    type="text"
                    placeholder="Откуда"
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                  />
                  <img src={iconGeo} alt="" />
                </div>
                <img
                  className={classes.formIcon}
                  src={iconRevers}
                  alt="<-|->"
                />
                <div className={classes.formInput}>
                  <MyInput
                    type="text"
                    placeholder="Куда"
                    name="toLocation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.toLocation}
                  />
                  <img src={iconGeo} alt="" />
                </div>
              </div>
            </div>
            <div>
              <label className={classes.formLabel}>Дата</label>
              <div className={classes.inputs}>
                <div className={classes.formInput}>
                  <DatePicker
                    locale={ru}
                    placeholderText="ДД/ММ/ГГ"
                    selected={startDate}
                    dateFormat="dd/MM/yy"
                    onChange={(date: any) => setStartDate(date)}
                    customInput={
                      <input
                        className={classes.input}
                        type="text"
                        name="nowDate"
                        value={values.nowDate}
                        placeholder="ДД/ММ/ГГ"
                      />
                    }
                  />
                  <img src={iconDate} alt="" />
                </div>
                <div className={classes.formInput}>
                  <DatePicker
                    locale={ru}
                    selected={willDate}
                    placeholderText="ДД/ММ/ГГ"
                    dateFormat="dd/MM/yy"
                    onChange={(date: any) => setWillDate(date)}
                    customInput={
                      <input
                        className={classes.input}
                        placeholder="ДД/ММ/ГГ"
                        type="text"
                        name="willDate"
                        value={values.willDate}
                      />
                    }
                  />
                  <img src={iconDate} alt="" />
                </div>
              </div>
            </div>
            <button
              className={classes.button}
              type="submit"
              disabled={isSubmitting}
            >
              НАЙТИ БИЛЕТЫ
            </button>
          </form>
        )}
      </Formik>
    )
  }

  return (
    <Formik
      initialValues={{
        location: "",
        toLocation: "",
        nowDate: "",
        willDate: "",
      }}
      validate={values => {
        const errors: any = {}
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
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between">
            <div>
              <label className={classes.formLabel}>Направление</label>
              <div className={classes.inputs}>
                <div className={classes.formInput}>
                  <MyInput
                    type="text"
                    placeholder="Откуда"
                    name="location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.location}
                  />
                  <img src={iconGeo} alt="" />
                </div>
                <img
                  className={classes.formIcon}
                  src={iconRevers}
                  alt="<-|->"
                />
                <div className={classes.formInput}>
                  <MyInput
                    type="text"
                    placeholder="Куда"
                    name="toLocation"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.toLocation}
                  />
                  <img src={iconGeo} alt="" />
                </div>
              </div>
            </div>
            <div>
              <label className={classes.formLabel}>Дата</label>
              <div className={classes.inputs}>
                <div className={classes.formInput}>
                  <DatePicker
                    locale={ru}
                    placeholderText="ДД/ММ/ГГ"
                    selected={startDate}
                    dateFormat="dd/MM/yy"
                    onChange={(date: any) => setStartDate(date)}
                    customInput={
                      <input
                        className={classes.input}
                        type="text"
                        name="nowDate"
                        value={values.nowDate}
                        placeholder="ДД/ММ/ГГ"
                      />
                    }
                  />
                  <img src={iconDate} alt="" />
                </div>
                <div className={classes.formInput}>
                  <DatePicker
                    locale={ru}
                    selected={willDate}
                    placeholderText="ДД/ММ/ГГ"
                    dateFormat="dd/MM/yy"
                    onChange={(date: any) => setWillDate(date)}
                    customInput={
                      <input
                        className={classes.input}
                        placeholder="ДД/ММ/ГГ"
                        type="text"
                        name="willDate"
                        value={values.willDate}
                      />
                    }
                  />
                  <img src={iconDate} alt="" />
                </div>
              </div>
            </div>
          </div>
          <button
            className={classes.button}
            type="submit"
            disabled={isSubmitting}
          >
            НАЙТИ БИЛЕТЫ
          </button>
        </form>
      )}
    </Formik>
  )
}

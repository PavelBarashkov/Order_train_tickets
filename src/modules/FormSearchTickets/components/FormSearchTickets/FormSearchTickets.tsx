import type React from "react"
import classes from "./formSearchTickets.module.css"
import { DirectionInputs } from "../DirectionInputs/DirectionInputs"
import { Formik } from "formik"
import * as Yup from "yup"
import { DateInputs } from "../DateInputs"
import { BtnSubmit } from "../BtnSubmit"

interface FormSearchTicketsProps {
  isMain: boolean
}

export const FormSearchTickets: React.FC<FormSearchTicketsProps> = ({
  isMain,
}) => {
  return (
    <div className={classes.formik}>
      <Formik
        className={classes.formik}
        initialValues={{
          location: "",
          toLocation: "",
        }}
        validationSchema={Yup.object({
          location: Yup.string(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {isMain ? (
          <div className={classes.inputGroupMainPage}>
            <DirectionInputs />
            <DateInputs />
            <div className={classes.inputGroupMainPageBtn}>
              <BtnSubmit />
            </div>
          </div>
        ) : (
          <>
            <div className={classes.inputGroup}>
              <DirectionInputs />
              <DateInputs />
            </div>
            <div className={classes.inputGroupBtn}>
              <BtnSubmit />
            </div>
          </>
        )}
      </Formik>
    </div>
  )
}

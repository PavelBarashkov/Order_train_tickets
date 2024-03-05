import classes from "./formSearchTickets.module.css"
import { DirectionInputs } from "../DirectionInputs/DirectionInputs"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { BtnSubmit } from "../BtnSubmit"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { DateInputs } from "../DateInputs"
import { useLocation, useNavigate } from "react-router-dom"
import { getSearchUrl } from "../../helpers/getSearchUrl "
import { MAIN_ROUTE } from "../../../../pages"
import { getTicket } from "../../../ListTickets/slice/listTicketsSlice"

interface FormSearchTicketsProps {
  isMain: boolean
}

export const FormSearchTickets: React.FC<FormSearchTicketsProps> = ({
  isMain,
}) => {
  const { cities, routeFrom, routeTo, date_start, date_end } = useAppSelector(
    (state: any) => state.searchTickets,
  )

  const initialValues = {
    routeFrom,
    routeTo,
    date_start,
    date_end,
  }
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const handleSubmit = () => {
    if (location.pathname !== MAIN_ROUTE) {
      dispatch(getTicket(location.search))
      return
    }
    navigate(getSearchUrl({ routeFrom, routeTo, date_start, date_end }))
  }

  return (
    <div className={classes.formik}>
      <Formik
        className={classes.formik}
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          routeFrom: Yup.object().shape({
            name: Yup.string().required("Выберите направление"),
          }),
          routeTo: Yup.object().shape({
            name: Yup.string().required("Выберите направление"),
          }),
        })}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            {isMain ? (
              <div className={classes.inputGroupMainPage}>
                <label className={classes.label}>Направление</label>
                <DirectionInputs
                  direction={{ routeFrom: "routeFrom", routeTo: "routeTo" }}
                  placeholder={{ routeFrom: "Откуда", routeTo: "Куда" }}
                  name={{ routeFrom: "routeFrom", routeTo: "routeTo" }}
                  options={cities}
                  setField={setFieldValue}
                />
                <label className={classes.label}>Дата</label>
                <DateInputs setField={setFieldValue} />
                <div className={classes.inputGroupMainPageBtn}>
                  <BtnSubmit />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.inputGroup}>
                  <div>
                    <label className={classes.label}>Направление</label>
                    <DirectionInputs
                      direction={{ routeFrom: "routeFrom", routeTo: "routeTo" }}
                      placeholder={{ routeFrom: "Откуда", routeTo: "Куда" }}
                      name={{ routeFrom: "routeFrom", routeTo: "routeTo" }}
                      options={cities}
                      setField={setFieldValue}
                    />
                  </div>
                  <div>
                    <label className={classes.label}>Дата</label>
                    <DateInputs setField={setFieldValue} />
                  </div>
                </div>
                <div className={classes.inputGroupBtn}>
                  <BtnSubmit />
                </div>
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

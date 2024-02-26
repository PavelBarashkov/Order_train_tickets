import classes from "./formSearchTickets.module.css"
import { DirectionInputs } from "../DirectionInputs/DirectionInputs"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { BtnSubmit } from "../BtnSubmit"
import { useAppSelector } from "../../../../app/hooks"
import { DateInputs } from "../DateInputs"
import { useLocation, useNavigate } from "react-router-dom"
import { TICKET_ROUTE } from "@pages"

interface FormSearchTicketsProps {
  isMain: boolean
}

export const FormSearchTickets: React.FC<FormSearchTicketsProps> = ({
  isMain,
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const { cities, routeFrom, routeTo, date_start, date_end } = useAppSelector(
    (state: any) => state.searchTickets,
  )

  const initialValues = {
    routeFrom,
    routeTo,
    date_start,
    date_end,
  }

  const handlerBtn = () => {
    const queryParams = new URLSearchParams()
    queryParams.append("routeFromId", routeFrom?._id || "")
    queryParams.append("routeFromName", routeFrom?.name || "")

    queryParams.append("routeToId", routeTo?._id || "")
    queryParams.append("routeToName", routeTo?.name || "")

    if (date_start) {
      queryParams.append("date_start", date_start)
    }
    if (date_end) {
      queryParams.append("date_end", date_end)
    }
    const queryString = queryParams.toString()
    const currentPath = location.pathname
    const newPath = `${TICKET_ROUTE}?${queryString}`

    if (currentPath === `/${TICKET_ROUTE}`) {
      navigate(`?${queryString}`)
    } else {
      navigate(newPath)
    }
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
        onSubmit={handlerBtn}
      >
        {({ setFieldValue }) => (
          <Form>
            {isMain ? (
              <div className={classes.inputGroupMainPage}>
                <DirectionInputs
                  direction={{ routeFrom: "routeFrom", routeTo: "routeTo" }}
                  placeholder={{ routeFrom: "Откуда", routeTo: "Куда" }}
                  name={{ routeFrom: "routeFrom", routeTo: "routeTo" }}
                  options={cities}
                  setField={setFieldValue}
                />
                <DateInputs setField={setFieldValue} />
                <div className={classes.inputGroupMainPageBtn}>
                  <BtnSubmit />
                </div>
              </div>
            ) : (
              <>
                <div className={classes.inputGroup}>
                  <DirectionInputs
                    direction={{ routeFrom: "routeFrom", routeTo: "routeTo" }}
                    placeholder={{ routeFrom: "Откуда", routeTo: "Куда" }}
                    name={{ routeFrom: "routeFrom", routeTo: "routeTo" }}
                    options={cities}
                    setField={setFieldValue}
                  />
                  <DateInputs setField={setFieldValue} />
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

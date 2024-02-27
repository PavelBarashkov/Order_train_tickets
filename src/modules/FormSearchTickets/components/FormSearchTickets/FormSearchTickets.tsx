import classes from "./formSearchTickets.module.css"
import { DirectionInputs } from "../DirectionInputs/DirectionInputs"
import { Form, Formik } from "formik"
import * as Yup from "yup"
import { BtnSubmit } from "../BtnSubmit"
import { useAppSelector } from "../../../../app/hooks"
import { DateInputs } from "../DateInputs"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { getSearchUrl } from "../../helpers/getSearchUrl "
import { TICKET_ROUTE } from "../../../../pages"

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
  const [searchParams, setSearchParams] = useSearchParams()


  const handleSubmit = () => {
    if (location.pathname === `/${TICKET_ROUTE}`) {
      searchParams.set("routeFromCity", routeFrom.name)
      searchParams.set("from_city_id", routeFrom._id)
      searchParams.set("routeToCity", routeTo.name)
      searchParams.set("to_city_id", routeTo._id)
      if (date_start) {
        searchParams.set("date_start", date_start)
      }
      if (date_end) {
        searchParams.set("date_end", date_end)
      }
      setSearchParams(searchParams)
    } else {
      navigate(getSearchUrl({ routeFrom, routeTo, date_start, date_end }))
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
        onSubmit={handleSubmit}
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

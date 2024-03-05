import type React from "react"
import classes from "./tabContantItem.module.css"
import { Col, Row } from "react-bootstrap"
import { Svg } from "../../../../../../assets"
import { useEffect, useState } from "react"
import { OptionItem } from "../OptionItem"
import { PlanCoach } from "../PlanCoach"
import { useAppSelector } from "../../../../../../app/hooks"
import type { RootState } from "../../../../../../app/store"

export const TabContentItem: React.FC<any> = ({ item, direction }) => {
  const { coach } = item
  const { seats } = item
  const [options, setOptions] = useState<any>({
    wifi: false,
    conditioning: false,
    linens: false,
    food: false,
  })
  const [cost, setCost] = useState(0)
  const { coachListFrom, coachListTo } = useAppSelector(
    (state: RootState) => state.trainInfo,
  )
  /*
  Отображает информацию о вагоне такие как 
  номер вагона +
  цена за место +
  количество мест +
  обслуживание +
  схема поезда с свободными и занятыми местами, с функцией выбора места +
  сумма билетов
  */
  const toggleOption = (option: string) => {
    setOptions((prevState: any) => ({
      ...prevState,
      [option]: !prevState[option],
    }))
  }

  const updateCost = () => {
    let totalCost = 0

    if (options.wifi) {
      totalCost += coach.wifi_price
    }
    if (!coach.is_linens_included) {
      totalCost += coach.linens_price
    }
    if (options.food) {
      totalCost += 0
    }
    setCost(totalCost)
  }

  useEffect(() => {
    updateCost()
  }, [options])

  let newCoach: any
  if (direction === "from") {
    newCoach = coachListFrom.selected.seats.filter(
      (item: any) => item.coach_id === coach._id,
    )
  } else {
    newCoach = coachListTo.selected.seats.filter(
      (item: any) => item.coach_id === coach._id,
    )
  }

  const calculateTotalPrice = () => {
    let totalCost = 0

    newCoach.forEach((item: any) => {
      let itemPrice = item.cost

      if (options.wifi) {
        itemPrice += coach.wifi_price
      }

      if (!coach.is_linens_included && options.linens) {
        itemPrice += coach.linens_price
      }

      totalCost += itemPrice
    })

    return totalCost
  }

  const totalPrice = calculateTotalPrice()

  return (
    <div className={classes.tabContentItem}>
      <Row className={classes.row}>
        <Col className={classes.containerNumberTrain}>
          <div className={classes.trainNumber}>
            {coach.name ? coach.name.split("-")[1] : ""}
          </div>
          <div>вагон</div>
        </Col>

        <Col className={classes.col}>
          <div className={classes.colTitle}>
            Места
            <span style={{ fontSize: 18, color: "#000000" }}>
              {" "}
              {coach.available_seats ? coach.available_seats : ""}
            </span>
          </div>
          {coach.class_type === "fourth" ||
          coach.class_type === "first" ? null : (
            <>
              {coach.top_price !== 0 && (
                <div>
                  Верхние{" "}
                  <span className={classes.number}>
                    {coach.class_type === "third" && (
                      <>
                        {
                          seats.filter(
                            (el: any) => el.index % 2 === 0 && el.index < 33,
                          ).length
                        }
                      </>
                    )}
                    {coach.class_type === "second" && (
                      <>
                        {seats.filter((el: any) => el.index % 2 === 0).length}
                      </>
                    )}
                  </span>
                </div>
              )}

              {coach.side_price !== 0 && (
                <div>
                  Боковые{" "}
                  <span className={classes.number}>
                    {coach.class_type === "third" && (
                      <>{seats.filter((el: any) => el.index > 32).length}</>
                    )}
                  </span>
                </div>
              )}

              {coach.bottom_price !== 0 && (
                <div>
                  Нижние{" "}
                  <span className={classes.number}>
                    {coach.class_type === "third" && (
                      <>
                        {
                          seats.filter(
                            (el: any) => el.index % 2 !== 0 && el.index < 33,
                          ).length
                        }
                      </>
                    )}
                    {coach.class_type === "second" && (
                      <>
                        {seats.filter((el: any) => el.index % 2 !== 0).length}
                      </>
                    )}
                  </span>
                </div>
              )}
            </>
          )}
        </Col>

        <Col className={classes.col}>
          <div className={classes.colTitle}>Стоимость</div>

          {coach.class_type === "fourth" || coach.class_type === "first" ? (
            <>
              {coach.top_price && (
                <div className={classes.colCost}>
                  {coach.top_price}
                  <span className={classes.spanIcon}> &#8381;</span>
                </div>
              )}
            </>
          ) : (
            <>
              {coach.top_price !== 0 && (
                <div className={classes.colCost}>
                  {coach.top_price}
                  <span className={classes.spanIcon}> &#8381;</span>
                </div>
              )}
              {coach.side_price !== 0 && (
                <div className={classes.colCost}>
                  {coach.side_price}
                  <span className={classes.spanIcon}> &#8381;</span>
                </div>
              )}

              {coach.bottom_price !== 0 && (
                <div className={classes.colCost}>
                  {coach.bottom_price}
                  <span className={classes.spanIcon}> &#8381;</span>
                </div>
              )}
            </>
          )}
        </Col>

        <Col className={classes.col}>
          <div className={classes.colTitle}>
            Обслуживание <span style={{ color: "#C4C4C4" }}>фпк</span>
          </div>
          <div className={classes.colOptionsList}>
            {coach.have_air_conditioning && (
              <OptionItem
                name="кондиционер"
                isActive={options.conditioning}
                icon={<Svg.Conditioning isActive={options.conditioning} />}
                onClick={() => toggleOption("conditioning")}
              />
            )}

            {coach.have_wifi && (
              <OptionItem
                name="Wifi"
                isActive={options.wifi}
                icon={<Svg.WifiOption isActive={options.wifi} />}
                onClick={() => toggleOption("wifi")}
              />
            )}
            {coach.is_linens_included ? (
              <OptionItem
                name="белье"
                isDisabled={true}
                isActive={false}
                icon={<Svg.Linens isDisabled={true} isActive={false} />}
              />
            ) : (
              <OptionItem
                name="белье"
                isActive={options.linens}
                icon={<Svg.Linens isActive={options.linens} />}
                onClick={() => toggleOption("linens")}
              />
            )}
            <OptionItem
              name="питание"
              isActive={options.food}
              icon={<Svg.FoodOption isActive={options.food} />}
              onClick={() => toggleOption("food")}
            />
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 15 }}>
        <PlanCoach
          coach={coach}
          seats={seats}
          type={coach.class_type}
          direction={direction}
        />
      </Row>
      <div className={classes.cost}>
        {new Intl.NumberFormat("ru-Ru").format(totalPrice)}
        <span> &#8381;</span>
      </div>
    </div>
  )
}

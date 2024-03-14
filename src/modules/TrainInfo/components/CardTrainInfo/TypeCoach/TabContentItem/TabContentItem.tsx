import type React from "react"
import classes from "./tabContantItem.module.css"
import { Col, Row } from "react-bootstrap"
import { Svg } from "../../../../../../assets"
import { useEffect, useState } from "react"
import { OptionItem } from "../OptionItem"
import { PlanCoach } from "../PlanCoach"
import { useAppDispatch, useAppSelector } from "../../../../../../app/hooks"
import type { RootState } from "../../../../../../app/store"
import {
  addToTotalCostFrom,
  addToTotalCostTo,
} from "../../../../slice/trainInfoSlice"

export const TabContentItem: React.FC<any> = ({
  item,
  direction,
  id_route,
}) => {
  const { coach } = item
  const { seats } = item
  const dispatch = useAppDispatch()

  const [options, setOptions] = useState<any>({
    wifi: false,
    conditioning: false,
    linens: false,
    food: false,
  })

  const { coachListFrom, coachListTo } = useAppSelector(
    (state: RootState) => state.trainInfo,
  )

  const toggleOption = (option: string) => {
    setOptions((prevState: any) => ({
      ...prevState,
      [option]: !prevState[option],
    }))
  }

  const costTicket = (arr: any, id: any) => {
    let sum = 0
    arr.forEach((item: any) => {
      if (item.coach_id === id) {
        sum += item.cost
      }
    })
    return sum
  }
  let sumOption = 0
  let totalCost =
    direction === "from"
      ? costTicket(coachListFrom.selected.seats, coach._id)
      : costTicket(coachListTo.selected.seats, coach._id)

  if (options.wifi) {
    if (direction === "from ") {
      sumOption += coach.wifi_price * coachListFrom.selected.seats.length
      totalCost += coach.wifi_price * coachListFrom.selected.seats.length
    } else {
      sumOption += coach.wifi_price * coachListTo.selected.seats.length
      totalCost += coach.wifi_price * coachListTo.selected.seats.length
    }
  }

  if (!coach.is_linens_included && options.linens) {
    if (direction === "from") {
      sumOption += coach.linens_price * coachListFrom.selected.seats.length
      totalCost += coach.linens_price * coachListFrom.selected.seats.length
    } else {
      sumOption += coach.linens_price * coachListTo.selected.seats.length
      totalCost += coach.linens_price * coachListTo.selected.seats.length
    }
  }

  useEffect(() => {
    if (direction === "from") {
      dispatch(addToTotalCostFrom({ option: sumOption }))
    } else {
      dispatch(addToTotalCostTo({ option: sumOption }))
    }
  }, [sumOption])

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
          id_route={id_route}
        />
      </Row>
      <div className={classes.cost}>
        {new Intl.NumberFormat("ru-Ru").format(totalCost)}
        <span> &#8381;</span>
      </div>
    </div>
  )
}

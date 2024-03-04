import type React from "react"
import classes from "./tabContantItem.module.css"
import { Col, Row } from "react-bootstrap"
import { OptionItem } from "../TypeCoach/OptionItem"
import { Svg } from "../../../../assets"

export const TabContentItem: React.FC<any> = ({ item }) => {
  const { coach } = item
  const { seats } = item

  /*
  Отображает информацию о вагоне такие как 
  номер вагона +
  цена за место +
  количество мест +
  обслуживание 
  схема поезда с свободными и занятыми местами, с функцией выбора места
  */
  console.log(coach)
  return (
    <div>
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
                            (el: any) => el.index % 2 === 0 && el.index < 33,
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
                  {coach.top_price}
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
            <OptionItem
              name="кондиционер"
              isDisabled={false}
              isActive={true}
              icon={<Svg.Conditioning isDisabled={false} isActive={true} />}
            />
            <OptionItem
              name="белье"
              isDisabled={false}
              isActive={false}
              icon={<Svg.Linens isDisabled={false} isActive={false} />}
            />

            <OptionItem
              name="Wifi"
              isDisabled={false}
              isActive={false}
              icon={<Svg.WifiOption isDisabled={false} isActive={false} />}
            />

            <OptionItem
              name="питание"
              isDisabled={false}
              isActive={false}
              icon={<Svg.FoodOption isDisabled={false} isActive={false} />}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

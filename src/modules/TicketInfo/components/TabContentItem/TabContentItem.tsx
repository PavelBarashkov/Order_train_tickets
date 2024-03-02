import type React from "react"
import classes from "./tabContantItem.module.css"
import { Col, Row } from "react-bootstrap"
import { OptionItem } from "../TypeCoach/OptionItem"
import { Svg } from "../../../../assets"

export const TabContentItem: React.FC = () => {
  /*
  Отображает информацию о вагоне такие как 
  номер вагона
  цена за место 
  количество мест 
  обслуживание 
  схема поезда с свободными и занятыми местами, с функцией выбора места
  */
  return (
    <div>
      <Row className={classes.row}>
        <Col className={classes.containerNumberTrain}>
          <div className={classes.trainNumber}>12</div>
          <div>вагон</div>
        </Col>

        <Col className={classes.col}>
          <div className={classes.colTitle}>
            Места
            <span style={{ fontSize: 18, color: "#000000" }}> 11</span>
          </div>
          <div>
            Верхние <span className={classes.number}>3</span>
          </div>
          <div>
            Нижние <span className={classes.number}>8</span>
          </div>
        </Col>

        <Col className={classes.col}>
          <div className={classes.colTitle}>Стоимость</div>
          <div className={classes.colCost}>
            2 920
            <span className={classes.spanIcon}> &#8381;</span>
          </div>
          <div className={classes.colCost}>
            3 890
            <span className={classes.spanIcon}> &#8381;</span>
          </div>
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

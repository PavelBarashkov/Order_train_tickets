import type React from "react"
import classes from "./infoPiceItem.module.css"
import "./tooltipStyle.css"
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap"

export const InfoPiceItem: React.FC<any> = ({ data, isTooltip }) => {
  // TODO Рефакторинг ситлей
  if (isTooltip) {
    return (
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id="tool" className={classes.Tooltip}>
            <Row style={{ minWidth: 230 }}>
              <Col>
                <div className={classes.InfoPiceItemType}>
                  <strong>Верхние</strong>
                </div>
              </Col>
              <Col>
                <div className={classes.InfoPice}> от</div>
              </Col>
              <Col>
                <div className={classes.InfoPice}>
                  <span>{data.price_info.top_price}</span> &#8381;
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={classes.InfoPiceItemType}>
                  <strong>Нижние</strong>
                </div>
              </Col>
              <Col>
                <div className={classes.InfoPice}> от</div>
              </Col>
              <Col>
                <div className={classes.InfoPice}>
                  <span>{data.price_info.bottom_price}</span> &#8381;
                </div>
              </Col>
            </Row>
          </Tooltip>
        }
      >
        <Row style={{ cursor: "pointer" }}>
          <Col>
            <div className={classes.InfoPiceItemType}>{data.name}</div>
          </Col>
          <Col xs={2}>
            <div className={classes.InfoPiceItemCount}>
              {data.available_seats_info}
            </div>
          </Col>
          <Col>
            <div className={classes.InfoPiceDiv}>
              от <span> {data.price_info.top_price} </span> &#8381;
            </div>
          </Col>
        </Row>
      </OverlayTrigger>
    )
  }

  return (
    <Row style={{ cursor: "pointer" }}>
      <Col>
        <div className={classes.InfoPiceItemType}>{data.name}</div>
      </Col>
      <Col xs={2}>
        <div className={classes.InfoPiceItemCount}>
          {data.available_seats_info}
        </div>
      </Col>
      <Col>
        <div className={classes.InfoPiceDiv}>
          от <span> {data.price_info.top_price} </span> &#8381;
        </div>
      </Col>
    </Row>
  )
}

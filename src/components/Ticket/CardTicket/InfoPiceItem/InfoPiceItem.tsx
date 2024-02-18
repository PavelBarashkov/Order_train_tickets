import type React from "react"
import classes from "./infoPiceItem.module.css"
import "./tooltipStyle.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

export const InfoPiceItem: React.FC = () => {
  return (
    <OverlayTrigger
      placement="bottom"
      overlay={
        <Tooltip id="tool" className={classes.Tooltip}>
          <div>
            <div className={classes.InfoPiceItem}>
              <div className={classes.InfoPiceItemType}>
                <strong>Верхние</strong>
              </div>
              <div className={classes.InfoPiceItemCount}>88</div>

              <div className={classes.InfoPice}>
                от <span>1 920</span> &#8381;
              </div>
            </div>
            <div className={classes.InfoPiceItem}>
              <div className={classes.InfoPiceItemType}>
                <strong>Нижние</strong>
              </div>
              <div className={classes.InfoPiceItemCount}>88</div>

              <div className={classes.InfoPice}>
                от <span>1 920</span> &#8381;
              </div>
            </div>
          </div>
        </Tooltip>
      }
    >
      <div className={classes.InfoPiceItem}>
        <div className={classes.InfoPiceItemType}>сидячий</div>
        <div className={classes.InfoPiceItemCount}>88</div>

        <div className={classes.InfoPice}>
          от <span>1 920</span> &#8381;
        </div>
      </div>
    </OverlayTrigger>
  )
}

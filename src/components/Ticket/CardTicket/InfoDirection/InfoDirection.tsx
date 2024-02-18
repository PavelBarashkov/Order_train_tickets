import type React from "react"
import classes from "./infoDirection.module.css"
import iconTo from "@assets/icons/Vector (2).png"
import iconFrom from "@assets/icons/Vector (3).png"

export const InfoDirection: React.FC = () => {
  return (
    <div className={classes.directionInfo}>
      <div className={classes.directionInfoItem}>
        <div className={classes.directionInfoAboutCity}>
          <div className={classes.directionInfoTime}>10:00</div>
          <div className={classes.directionInfoCity}>Москва</div>
          <div className={classes.directionInfoRailwayStation}>
            Курский вокзал
          </div>
        </div>
        <div>
          <div className={classes.timeDirection}>09:42</div>
          <img src={iconTo} alt="" />
        </div>
        <div className={classes.directionInfoAboutCity}>
          <div className={classes.directionInfoTime}>10:00</div>
          <div className={classes.directionInfoCity}>Москва</div>
          <div className={classes.directionInfoRailwayStation}>
            Курский вокзал
          </div>
        </div>
      </div>
      {/*  тут будет условия его появления */}
      <div className={classes.directionInfoItem}>
        <div className={classes.directionInfoAboutCity}>
          <div className={classes.directionInfoTime}>10:00</div>
          <div className={classes.directionInfoCity}>Москва</div>
          <div className={classes.directionInfoRailwayStation}>
            Курский вокзал
          </div>
        </div>
        <div>
          <div className={classes.timeDirection}>09:42</div>
          <img src={iconFrom} alt="" />
        </div>
        <div className={classes.directionInfoAboutCity}>
          <div className={classes.directionInfoTime}>10:00</div>
          <div className={classes.directionInfoCity}>Москва</div>
          <div className={classes.directionInfoRailwayStation}>
            Курский вокзал
          </div>
        </div>
      </div>
    </div>
  )
}

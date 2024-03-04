import type React from "react"
import classes from "./numberOfWagons.module.css"

interface INumberOfWagonsProps {
  coachList: any
  classActive: string
}

export const NumberOfWagons: React.FC<INumberOfWagonsProps> = ({
  coachList,
  classActive,
}) => {
  return (
    <div className={classes.NumberOfWagons}>
      <div className={classes.NumberOfWagonsList}>
        <div>Вагоны</div>
        {coachList.loading ? (
          <div>Получение информации</div>
        ) : (
          <>
            {coachList.list.map((coach: any) => (
              <div
                className={`${classActive === coach.coach.class_type ? classes.active : classes.inActive}`}
              >
                {coach.coach.name.split("-")[1]}
              </div>
            ))}
          </>
        )}
      </div>

      <div>Нумерация вагонов начинается с головы поезда</div>
    </div>
  )
}

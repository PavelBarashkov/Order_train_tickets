import type React from "react"
import classes from "./numberOfTickets.module.css"
import { Col, Row } from "react-bootstrap"

export const NumberOfTickets: React.FC = () => {
  return (
    <div className={classes.numberOfTickets}>
      <h3 className={classes.numberOfTicketsTitle}>Количество билетов</h3>
      <Row className={classes.numberOfTicketsInfo}>
        {data.map((item: NumberOfTicketsInfoProps) => (
          <NumberOfTicketsInfo
            key={item.title}
            title={item.title}
            count={item.count}
            description={item.description}
            isDiscount={item.isDiscount}
          />
        ))}
      </Row>
    </div>
  )
}

interface NumberOfTicketsInfoProps {
  title: string
  count: number
  description?: string
  isDiscount?: boolean
}

const NumberOfTicketsInfo: React.FC<NumberOfTicketsInfoProps> = ({
  title,
  count,
  description,
  isDiscount,
}) => {
  return (
    <Col className={classes.numberOfTicketsInfoCol}>
      <div
        className={classes.numberOfTicketsCount}
      >{`${title} - ${count}`}</div>
      <div className={`${isDiscount ? classes.discount : classes.description}`}>
        {description}
      </div>
    </Col>
  )
}

const data = [
  {
    title: "Взролсых",
    count: 2,
    description: "Можно добавить еще 3 пассажиров",
  },
  {
    title: "Детских",
    count: 1,
    description:
      "Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%",
    isDiscount: true,
  },
  {
    title: "Детских «без места»",
    count: 0,
  },
]

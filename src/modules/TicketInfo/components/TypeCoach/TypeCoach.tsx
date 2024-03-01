import type React from "react"
import classes from "./typeCoach.module.css"
import Tabs from "react-bootstrap/Tabs"
import Row from "react-bootstrap/Row"
import Tab from "react-bootstrap/Tab"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"

import { Svg } from "@assets"
import { useState } from "react"
import { CoachItem } from "./CoachItem/CoachItem"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import type { RootState } from "../../../../app/store"
import { getCoach } from "../../slice/trainInfoSlice"
import { NumberOfWagons } from "../NumberOfWagons"
import { TabItem } from "./TabItem"

export const TypeCoach: React.FC<any> = ({ ticketInfo }) => {
  const [activeTab, setActiveTab] = useState<string>("")

  const dispatch = useAppDispatch()

  const handlerTab = (eventKey: string) => {
    setActiveTab(eventKey)
  }

  const handleBtnSelectClass = () => {
    // dispatch(getCoach(ticket.ticketInfo._id))
  }

  // TODO Вставить компонент для отображение количесво вагонов и активных при просмотре (Осталось разработаь пропсы)
  return (
    <div className={classes.typeCoach}>
      <h3 className={classes.typeCoachTitle}>Тип вагона</h3>
      <Tab.Container
        defaultActiveKey="first"
        onSelect={e => (e ? handlerTab(e) : null)}
      >
        <Row className={classes.types}>
          <Nav>
            {ticketInfo.have_fourth_class && (
              <TabItem
                name="Сидячий"
                isActive={activeTab}
                eventKey="fourth"
                onClick={handlerTab}
              >
                <Svg.Sit isActive={activeTab === "fourth" ? true : false} />
              </TabItem>
            )}
            {ticketInfo.have_third_class && (
              <TabItem
                name="Плацкарт"
                isActive={activeTab}
                eventKey="third"
                onClick={handlerTab}
              >
                <Svg.ReservedSeat
                  isActive={activeTab === "third" ? true : false}
                />
              </TabItem>
            )}
            {ticketInfo.have_second_class && (
              <TabItem
                name="Купе"
                isActive={activeTab}
                eventKey="second"
                onClick={handlerTab}
              >
                <Svg.Coupe isActive={activeTab === "second" ? true : false} />
              </TabItem>
            )}
            {ticketInfo.have_first_class && (
              <TabItem
                name="Люкс"
                isActive={activeTab}
                eventKey="first"
                onClick={handlerTab}
              >
                <Svg.Luxury isActive={activeTab === "first" ? true : false} />
              </TabItem>
            )}
          </Nav>
        </Row>
        <NumberOfWagons />
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="fourth">
              <div>fourth</div>
              {/* <CoachItem ticket={ticket} /> */}
            </Tab.Pane>

            <Tab.Pane eventKey="third">
              <div>third</div>
            </Tab.Pane>

            <Tab.Pane eventKey="second">Тип вагона Купэ</Tab.Pane>
            <Tab.Pane eventKey="first">Тип вагона Lux</Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </div>
  )
}

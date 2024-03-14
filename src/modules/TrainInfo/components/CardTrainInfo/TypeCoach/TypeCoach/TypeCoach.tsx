import type React from "react"
import classes from "./typeCoach.module.css"
import Row from "react-bootstrap/Row"
import Tab from "react-bootstrap/Tab"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"

import { Svg } from "@assets"
import { useState } from "react"

import { TabItem } from "../TabItem"
import { useAppDispatch } from "../../../../../../app/hooks"
import { NumberOfWagons } from "../NumberOfWagons"
import { TabContentItem } from "../TabContentItem"

export const TypeCoach: React.FC<any> = ({
  ticketInfo,
  direction,
  coachList,
}) => {
  const [activeTab, setActiveTab] = useState<string>("")
  const [classActive, setClassActive] = useState<string>("")

  const dispatch = useAppDispatch()

  const handlerTab = (eventKey: string) => {
    setActiveTab(eventKey)
    setClassActive(eventKey)
  }
  return (
    <div className={classes.typeCoach}>
      <h3 className={classes.typeCoachTitle}>Тип вагона</h3>
      <Tab.Container onSelect={e => (e ? handlerTab(e) : null)}>
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
        <NumberOfWagons coachList={coachList} classActive={classActive} />
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="fourth">
              {coachList.list.map((item: any) => {
                if (item.coach.class_type === "fourth") {
                  return (
                    <TabContentItem
                      item={item}
                      id_route={ticketInfo._id}

                      key={item.coach._id}
                      direction={direction}
                    />
                  )
                }
              })}
            </Tab.Pane>

            <Tab.Pane eventKey="third">
              {coachList.list.map((item: any) => {
                if (item.coach.class_type === "third") {
                  return (
                    <TabContentItem
                      item={item}
                      id_route={ticketInfo._id}

                      key={item.coach._id}
                      direction={direction}
                    />
                  )
                }
              })}
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              {coachList.list.map((item: any) => {
                if (item.coach.class_type === "second") {
                  return (
                    <TabContentItem
                      item={item}
                      id_route={ticketInfo._id}

                      key={item.coach._id}
                      direction={direction}
                    />
                  )
                }
              })}
            </Tab.Pane>
            <Tab.Pane eventKey="first">
              {coachList.list.map((item: any) => {
                if (item.coach.class_type === "first") {
                  return (
                    <TabContentItem
                      item={item}
                      id_route={ticketInfo._id}
                      key={item.coach._id}
                      direction={direction}
                    />
                  )
                }
              })}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </div>
  )
}

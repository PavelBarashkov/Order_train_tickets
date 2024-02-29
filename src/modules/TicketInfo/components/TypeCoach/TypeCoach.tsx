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

export const TypeCoach: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null)
  const { ticket } = useAppSelector((state: RootState) => state.trainInfo)
  const { departure } = ticket
  const dispatch = useAppDispatch()

  const handlerTab = (eventKey: string) => {
    setActiveTab(eventKey)
  }

  const handleBtnSelectClass = () => {
    dispatch(getCoach(ticket.departure._id))
  }

  return (
    <div className={classes.typeCoach}>
      <h3 className={classes.typeCoachTitle}>Тип вагона</h3>
      <Tab.Container
        defaultActiveKey="first"
        onSelect={e => (e ? handlerTab(e) : null)}
      >
        <Row className={classes.types}>
          <Nav>
            {departure.have_fourth_class && (
              <Col>
                <Nav.Item
                  className={classes.typeCoachItem}
                  onClick={handleBtnSelectClass}
                >
                  <Nav.Link
                    eventKey="sit"
                    className={classes.typeCoachItemLink}
                  >
                    <Svg.Sit isActive={activeTab === "sit" ? true : false} />{" "}
                    <div
                      className={`${activeTab === "sit" ? classes.active : classes.inActive} `}
                    >
                      Сидячий
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Col>
            )}
            {departure.have_third_class && (
              <Col>
                <Nav.Item className={classes.typeCoachItem}>
                  <Nav.Link
                    eventKey="reserved-seat"
                    className={classes.typeCoachItemLink}
                  >
                    <Svg.ReservedSeat
                      isActive={activeTab === "reserved-seat" ? true : false}
                    />
                    <div
                      className={`${activeTab === "reserved-seat" ? classes.active : classes.inActive} `}
                    >
                      Плацкарт
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Col>
            )}
            {departure.have_second_class && (
              <Col>
                <Nav.Item className={classes.typeCoachItem}>
                  <Nav.Link
                    eventKey="Coupe"
                    className={classes.typeCoachItemLink}
                  >
                    <Svg.Coupe
                      isActive={activeTab === "Coupe" ? true : false}
                    />
                    <div
                      className={`${activeTab === "Coupe" ? classes.active : classes.inActive} `}
                    >
                      Купе
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Col>
            )}
            {departure.have_first_class && (
              <Col>
                <Nav.Item className={classes.typeCoachItem}>
                  <Nav.Link
                    eventKey="Luxury"
                    className={classes.typeCoachItemLink}
                  >
                    <Svg.Luxury
                      isActive={activeTab === "Luxury" ? true : false}
                    />
                    <div
                      className={`${activeTab === "Luxury" ? classes.active : classes.inActive} `}
                    >
                      Люкс
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Col>
            )}
          </Nav>
        </Row>
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="sit">
              <CoachItem ticket={ticket} />
            </Tab.Pane>

            <Tab.Pane eventKey="reserved-seat">
              <CoachItem />
            </Tab.Pane>

            <Tab.Pane eventKey="Coupe">Тип вагона Купэ</Tab.Pane>
            <Tab.Pane eventKey="Luxury">Тип вагона Lux</Tab.Pane>
          </Tab.Content>
        </Col>
      </Tab.Container>
    </div>
  )
}

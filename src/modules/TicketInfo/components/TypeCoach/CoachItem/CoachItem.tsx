import type React from "react"
import classes from "./coachItem.module.css"
import { Col, Nav, Tab } from "react-bootstrap"
import { Svg } from "@assets"
import { useState } from "react"
import { TypeItem } from "../TypeItem/TypeItem"

interface ITypeCoachItemProps {
  key: string
  activeTab: string
  label: string
  children: React.ReactNode
}

export const CoachItem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  const handlerTab = (eventKey: string) => {
    setActiveTab(eventKey)
  }

  return (
    <div>
      <Tab.Container onSelect={e => (e ? handlerTab(e) : null)}>
        <div className={classes.header}>
          <Nav className={classes.headerNav}>
            <div className={classes.headerCoachList}>
              <div>Вагоны</div>
              {Array.from({ length: 4 }, (_, index) => (
                <Nav.Item>
                  <Nav.Link eventKey={index}>
                    <div
                      className={`${activeTab === index.toString() ? classes.active : classes.inActive} `}
                    >
                      {index}
                    </div>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </div>

            <div className={classes.headerSubInfo}>
              Нумерация вагонов начинается с головы поезда
            </div>
          </Nav>
        </div>

        <Tab.Content>
          {Array.from({length: 4}, (_, index) => (
            <Tab.Pane  eventKey={index}><TypeItem coach={coach}/></Tab.Pane>
          ))}

        </Tab.Content>
      </Tab.Container>
    </div>
  )
}

const coach = {
  number: 12,
  typeCoach: 'sit',
  seats: {
    allSeats: 25,
    totalPrice: 25000,
    lower: {
      quantity: 10,
      cost: 1500,
    },
    top: {
      quantity: 14,
      cost: 2500
    },
  },
  options: {
    wifi: true,
    conditioning: true,
    linens_included: true,
    food: true
  }
}
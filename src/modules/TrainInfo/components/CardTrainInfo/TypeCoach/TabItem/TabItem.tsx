import type React from "react"
import classes from "./tabItem.module.css"
import { Col, Nav } from "react-bootstrap"

interface ITabItemProps {
  children: React.ReactNode
  isActive: string
  eventKey: string
  name: string
  onClick: (eventKey: string) => void
}

export const TabItem: React.FC<ITabItemProps> = ({
  isActive,
  onClick,
  eventKey,
  children,
  name,
}) => {
  return (
    <Col>
      <Nav.Item
        className={classes.tabItem}
        onClick={() => onClick(eventKey)}
      >
        <Nav.Link eventKey={eventKey} className={classes.tabItemLink}>
          {children}
          <div
            className={`${isActive === eventKey ? classes.active : classes.inActive} `}
          >
            {name}
          </div>
        </Nav.Link>
      </Nav.Item>
    </Col>
  )
}

import type React from "react"
import classes from "./optionItem.module.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

interface IOptionItemProps {
    icon: React.ReactNode;
  name: string
  isDisabled: boolean
  isActive: boolean
}

export const OptionItem: React.FC<IOptionItemProps> = ({ icon, name, isDisabled, isActive }) => {
  return (
    <OverlayTrigger
      key={"bottom"}
      placement={"bottom"}
      overlay={<Tooltip id={`tooltip-bottom`}>{name}</Tooltip>}
    >
      <div className={`${classes.option} ${isDisabled ? classes.disabled : isActive ? classes.active: ''}`}>{icon}</div>
    </OverlayTrigger>
  )
}

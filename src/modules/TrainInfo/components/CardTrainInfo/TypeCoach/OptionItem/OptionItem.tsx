import type React from "react"
import classes from "./optionItem.module.css"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

interface IOptionItemProps {
  icon: React.ReactNode
  name: string
  isActive: boolean
  isDisabled?: boolean
}

export const OptionItem: React.FC<any> = ({
  icon,
  name,
  isDisabled,
  isActive,
  ...props
}) => {
  return (
    <OverlayTrigger
      key={"bottom"}
      placement={"bottom"}
      overlay={<Tooltip id={`tooltip-bottom`}>{name}</Tooltip>}
    >
      <button
        {...props}
        className={`${classes.option} ${isDisabled ? classes.disabled : isActive ? classes.active : ""}`}
        disabled={isDisabled}
      >
        {icon}
      </button>
    </OverlayTrigger>
  )
}

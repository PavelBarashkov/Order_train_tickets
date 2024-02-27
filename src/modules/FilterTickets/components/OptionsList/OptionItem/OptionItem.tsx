import type React from "react"
import classes from "./optionItem.module.css"
import { MySwitch } from "../../../../../components/UI"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

interface OptionItemProps {
  item: {
    icon: string
    label: string
    value: string
  }
}

export const OptionItem: React.FC<OptionItemProps> = ({ item }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchParams = new URLSearchParams(location.search)
    const checked = e.target.checked

    if (checked) {
      searchParams.set(item.value, "true")
    } else {
      searchParams.delete(item.value)
    }

    navigate(`?${searchParams.toString()}`, { replace: true })
    setIsChecked(checked)
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const value = searchParams.get(item.value)
    setIsChecked(value === "true")
  }, [location.search, item.value])

  return (
    <div className={classes.item}>
      <div className={classes.itemIcon}>
        <img src={item.icon} alt="" />
      </div>
      <div className={classes.itemTitle}>{item.label}</div>
      <div className={classes.itemInput}>
        <MySwitch checked={isChecked} onChange={handleSwitch} />
      </div>
    </div>
  )
}

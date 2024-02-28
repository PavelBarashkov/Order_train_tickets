import type React from "react"
import classes from "./optionItem.module.css"
import { MySwitch } from "../../../../../components/UI"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

interface OptionItemProps {
  item: {
    icon: string
    label: string
    value: string
  }
}

export const OptionItem: React.FC<OptionItemProps> = ({ item }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked

    if (checked) {
      searchParams.set(item.value, "true")
      setSearchParams(searchParams)
      setIsChecked(true)
    } else {
      searchParams.delete(item.value)
      setSearchParams(searchParams)
      setIsChecked(false)
    }
  }

  useEffect(() => {
    const isActive = searchParams.get(item.value)
    if (isActive) setIsChecked(true)
  }, [])

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

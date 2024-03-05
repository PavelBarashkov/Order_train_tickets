import React, { useEffect, useState } from "react"
import classes from "./sort.module.css"
import { Dropdown } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"

interface MenuItem {
  value: string
  label: string
}

export const Sort: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const menuItems: MenuItem[] = [
    { value: "date", label: "времени" },
    { value: "price", label: "стоимости" },
    { value: "duration", label: "длительности" },
  ]
  const [label, setLabel] = useState<string>(menuItems[0].label)

  const handleChange = (item: MenuItem) => {
    setLabel(item.label)
    searchParams.set("sort", item.value)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    const sort = searchParams.get("sort")
    if (sort) {
      const foundItem = menuItems.find(item => item.value === sort)
      if (foundItem) {
        setLabel(foundItem.label)
      }
    }
  }, [])

  return (
    <div className={classes.container}>
      <span>сортировать по: </span>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {label}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {menuItems.map(item => (
            <Dropdown.Item
              key={item.value}
              onClick={() => handleChange(item)}
              className={classes.menuItem}
            >
              {item.label}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

const CustomToggle = React.forwardRef<any>(
  ({ children, onClick }: any, ref) => (
    <div
      ref={ref}
      onClick={e => {
        e.preventDefault()
        onClick(e)
      }}
    >
      <div className={classes.label}>{children}</div>
    </div>
  ),
)

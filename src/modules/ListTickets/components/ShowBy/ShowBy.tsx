import type React from "react"
import classes from "./showBy.module.css"
import { useEffect, useState } from "react"
import { ButtonGroup, ToggleButton } from "react-bootstrap"
import { useSearchParams } from "react-router-dom"

interface RadioOption {
  value: string
}

export const ShowBy: React.FC = () => {
  const [radioValue, setRadioValue] = useState<string>("5")
  const [searchParams, setSearchParams] = useSearchParams()
  const radios: RadioOption[] = [
    { value: "5" },
    { value: "10" },
    { value: "20" },
  ]

  const handleBtnLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setRadioValue(value)
    searchParams.set("limit", value)
    setSearchParams(searchParams)
  }

  useEffect(() => {
    const showBy = searchParams.get("limit")
    if (showBy) {
      setRadioValue(showBy)
    }
  }, [])

  return (
    <div className={classes.container}>
      <span>показать по:</span>
      <ButtonGroup className={classes.btns}>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            className={`${classes.btn} ${classes["btn-primary"]}`}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={handleBtnLimit}
          >
            {radio.value}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  )
}

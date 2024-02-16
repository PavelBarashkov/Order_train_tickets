import React from "react"
import { useField } from "formik"
import type { InputProps } from "../Interface/InputProps"
import "./style.css"
import classes from "./myRangeInput.module.css"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"

function valueLabelFormat(value: number) {
  const units = ":00"
  return `${value}${units}`
}

function valuetext(value: number) {
  return `${value}:00`
}

const minDistance = 1

export const RangeInput: React.FC<InputProps> = ({
  label,
  typeInput,
  ...props
}) => {
  const [filed] = useField({ ...props, type: "range" })
  const [value1, setValue1] = React.useState<number[]>(
    props.max && props.min ? [props.min, props.max / 2] : [0, 0],
  )

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }
  if (typeInput === "cost") {
    return (
      <Box sx={{ width: 300 }}>
        <div className={classes.label}>
          <div>От</div>
          <div>До</div>
        </div>
        <Slider
          {...filed}
          {...props}
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          disableSwap
          max={props.max}
          min={props.min}
          step={props.step}
        />
        <div className={classes.label}>
          <div>{props.min}</div>
          <div>{props.max}</div>
        </div>
      </Box>
    )
  }

  if (typeInput === "date") {
    return (
      <Box sx={{ width: 300 }}>
        <Slider
          {...filed}
          {...props}
          getAriaLabel={() => "Minimum distance"}
          value={value1}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          disableSwap
          max={props.max}
          min={props.min}
          step={props.step}
        />
        <div className={classes.label}>
          <div>{props.min}:00</div>
          <div>{props.max}:00</div>
        </div>
      </Box>
    )
  }
}

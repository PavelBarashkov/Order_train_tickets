import React, { useEffect } from "react"
import "./style.css"
import classes from "./myRangeInput.module.css"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

const minDistance = 1

function valueLabelFormat(value: number) {
  const units = ":00"
  return `${value}${units}`
}

interface ITimeRangeProps {
  departure: {
    start: string
    end: string
  }
}

export const TimeRange: React.FC<ITimeRangeProps> = ({
  departure,
  ...props
}) => {
  const [value, setValue] = React.useState<number[]>([0, 0])
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], newValue[1] - minDistance), newValue[1]])
    } else {
      setValue([newValue[0], Math.max(newValue[1], newValue[0] + minDistance)])
    }

    if (newValue[1] !== 0) {
      const searchParams = new URLSearchParams(location.search)
      searchParams.set(departure.start, newValue[0].toString())
      searchParams.set(departure.end, newValue[1].toString())
      navigate(`?${searchParams.toString()}`, { replace: true })
    }
  }

  useEffect(() => {
    const departure_start = searchParams.get(departure.start)
    const departure_end = searchParams.get(departure.end)

    setValue([Number(departure_start || 0), Number(departure_end || 0)])
  }, [])

  return (
    <Box sx={{ width: 300 }}>
      <div className={classes.label}>
        <div>От</div>
        <div>До</div>
      </div>
      <Slider
        {...props}
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        disableSwap
        step={1}
        min={0}
        max={24}
      />
      <div className={classes.label}>
        <div>00:00</div>
        <div>24:00</div>
      </div>
    </Box>
  )
}

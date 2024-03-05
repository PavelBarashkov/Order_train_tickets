import React, { useEffect } from "react"
import "./style.css"
import classes from "./myRangeInput.module.css"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"

const minDistance = 1000

interface ICostRangeProps {
  min: number
  max: number
}

export const CostRange: React.FC<ICostRangeProps> = ({ min, max }) => {
  const [value, setValue] = React.useState<number[]>([0, 0])
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]])
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)])
    }

    if (value[1] !== 0) {
      const searchParams = new URLSearchParams(location.search)
      searchParams.set("price_from", value[0].toString())
      searchParams.set("price_to", value[1].toString())
      navigate(`?${searchParams.toString()}`, { replace: true })
    }
  }

  const formatPrice = (price: number): string => {
    if (!price) {
      return ""
    }
    return new Intl.NumberFormat("ru-Ru").format(price)
  }

  useEffect(() => {
    const price_from = searchParams.get("price_from")
    const price_to = searchParams.get("price_to")

    setValue([Number(price_from || 0), Number(price_to || 0)])
  }, [])
  
  return (
    <Box sx={{ width: 300 }}>
      <div className={classes.label}>
        <div>От</div>
        <div>До</div>
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
        max={max}
        min={min}
        step={250}
      />
      <div className={classes.label}>
        <div>{formatPrice(min)}</div>
        <div>{formatPrice(max)}</div>
      </div>
    </Box>
  )
}

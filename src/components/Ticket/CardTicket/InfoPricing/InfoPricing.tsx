import type React from 'react'
import { InfoPiceItem } from '../InfoPiceItem'
import classes from "./infoPricing.module.css"

export const InfoPricing: React.FC = () => {

  return (
    <>
     <div className={classes.infoPricing}>
      <InfoPiceItem/>
      <InfoPiceItem/>
      <InfoPiceItem/>
      <InfoPiceItem/>
      <button className={classes.infoPricingBtn}>Выбрать места</button>
      </div>

    </>
   
  )
}

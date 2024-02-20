import type React from 'react'
import { InfoPiceItem } from '../InfoPiceItem'
import classes from "./infoPricing.module.css"
import { useNavigate } from 'react-router-dom'
import { TRAIN_INFO_ROUTER } from '../../../../pages/helpers/const/const'

export const InfoPricing: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
     <div className={classes.infoPricing}>
      <InfoPiceItem/>
      <InfoPiceItem/>
      <InfoPiceItem/>
      <InfoPiceItem/>
      <button onClick={() => navigate(TRAIN_INFO_ROUTER)} className={classes.infoPricingBtn}>Выбрать места</button>
      </div>

    </>
   
  )
}

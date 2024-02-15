import React from 'react'
import classes from "./parameters.module.css";
import { DateFilter } from './components/DateFilter/DateFilter ';

export const Parameters = () => {
  return (
    <div className={classes.parameters}>
        <DateFilter/>
    </div>
  )
}

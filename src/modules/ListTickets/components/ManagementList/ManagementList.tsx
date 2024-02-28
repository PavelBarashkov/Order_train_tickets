import type React from 'react'
import classes from './managementList.module.css'
import { FoundCount } from '../foundCount'
import { Sort } from '../Sort'
import { ShowBy } from '../ShowBy'

export const ManagementList: React.FC = () => {
  return (
    <div className={classes.container}>
      <FoundCount/>
      <div className={classes.containerSort}>
        <Sort/>
        <ShowBy/>
      </div>
    </div>
  )
}

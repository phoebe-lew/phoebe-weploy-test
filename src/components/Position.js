import React from 'react'
import Employee from './Employee'
import Button from './Button'
import { formatJobLocation, formatTime, mapStatusToLabel } from '../utils'

const Position = ({ positionData }) => (
  <div>
    <Employee employeeDetails={positionData.weployee} />

    <div>JOB LOCATION</div>
    <div>{formatJobLocation(positionData.job.location)}</div>
    <div>START TIME</div>
    <div>{formatTime(positionData['start-time'])}</div>
    <div>FINISH TIME</div>
    <div>{formatTime(positionData['finish-time'])}</div>

    <Button>{mapStatusToLabel(positionData.status)}</Button>
  </div>
)

export default Position

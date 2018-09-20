import React from 'react'
import Employee from './Employee'
import Button from './Button'
import { formatJobLocation, formatTime, mapStateToLabel } from '../utils'

const Position = ({ positionData }) => (
  <div style={{ borderStyle: 'solid', padding: '5px', margin: '10px' }}>
    <Employee employeeDetails={positionData.weployee} />
    <br />

    <div>JOB LOCATION</div>
    <div>{formatJobLocation(positionData.job.location)}</div>
    <br />
    <div>START TIME</div>
    <div>{formatTime(positionData.job['start-time'])}</div>
    <br />
    <div>FINISH TIME</div>
    <div>{formatTime(positionData.job['finish-time'])}</div>
    <br />

    <Button>{mapStateToLabel(positionData.state)}</Button>
  </div>
)

export default Position

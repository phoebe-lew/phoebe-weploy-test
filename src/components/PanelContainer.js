import React from 'react'
import Position from './Position'

const PanelContainer = ({ positions }) => (
  <div>
    {positions.map(position => (
      <Position positionData={position} />
    ))}
  </div>
)

export default PanelContainer

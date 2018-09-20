import React from 'react'
import Position from './Position'

const PanelContainer = ({ positions }) => (
  <div style={{ display: 'flex', padding: '10px' }}>
    {positions.map(position => (
      <span>
        <Position positionData={position} />
      </span>
    ))}
  </div>
)

export default PanelContainer

import rawData from './data.json'

export const getPositionsByState = state =>
  rawData.filter(function(position) {
    return position.state === state
  })

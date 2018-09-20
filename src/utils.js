import moment from 'moment'

const stateLabelMap = {
  accepted: 'End contract',
  requested: 'Cancel request',
  'awaiting-approval': 'Approve request'
}
export const mapStateToLabel = state => stateLabelMap[state]

export const formatJobLocation = location =>
  `${location.suburb}, ${location.state} ${location.postcode}`

export const formatTime = timeStr =>
  moment(timeStr, 'YYYY-MM-DD hh:mm:ss +-HHmm').format('DD MMMM hh:mm')

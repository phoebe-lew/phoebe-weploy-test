import moment from 'moment'

const statusLabelMap = {
  accepted: 'End contract',
  requested: 'Cancel request',
  'awaiting-approval': 'Approve request'
}
export const mapStatusToLabel = status => statusLabelMap[status]

export const formatJobLocation = location =>
  `${location.suburb}, ${location.state} ${location.postcode}`

export const formatTime = timeStr =>
  moment(timeStr, 'YYYY-MM-DD hh:mm:ss +-HHmm').format('dd MMMM hh:mm')

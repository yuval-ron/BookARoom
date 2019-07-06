import moment from 'moment'

export const getWeekId = (momentElement) => {
  if (!momentElement) {
    momentElement = moment()
  }

  return `${momentElement.week()}-${momentElement.year()}`
}

import React, {Component} from 'react'
import moment from 'moment'
import Icon from '@material-ui/core/Icon'

import './Calendar.css'

class Calendar extends Component {
  getCurrentWeekDates = () => {
    const currentDate = moment()
    const weekStart = currentDate.clone().startOf('week')

    const days = []
    for (let i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days'))
    }

    return days
  }

  render() {
    const {createHandleAddNewEventClickCallback, weekEvents} = this.props

    return (
      <div className="calendar-container">
        {
          this.getCurrentWeekDates().map(dayMoment => {
            const dayName = dayMoment.format('dddd');
            const isToday = moment().diff(dayMoment, 'days') === 0

            return (
              <div className="day" key={dayName}>
                <div className={`day-name day-${dayName}`}>
                  <span>{dayName}</span>
                  <span className="sub-title">
                    {isToday ? 'Today' : dayMoment.format('DD/MM')}
                  </span>
                </div>
                <div className="day-events-container">
                  <div className="new-event-button" onClick={createHandleAddNewEventClickCallback(dayMoment)}>
                    <Icon>add</Icon>
                  </div>
                  {weekEvents[dayName] && Object.keys(weekEvents[dayName]).map(eventId => {
                    const event = weekEvents[dayName][eventId]

                    return (
                      <div key={eventId}>{event.name}</div>
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Calendar

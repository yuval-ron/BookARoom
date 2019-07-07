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

  createRemoveEventCallback = (event, eventId) => {
    return () => {
      const {removeEvent} = this.props

      removeEvent(event, eventId)
    }
  }

  render() {
    const {createHandleAddNewEventClickCallback, weekEvents, createEditEventCallback} = this.props

    return (
      <div className="calendar-container">
        {
          this.getCurrentWeekDates().map(dayMoment => {
            const dayName = dayMoment.format('dddd');
            const isToday = moment().diff(dayMoment, 'days') === 0
            let dayEvents = []

            if (weekEvents[dayName]) {
              dayEvents = Object.keys(weekEvents[dayName])
                .sort((aId, bId) => {
                  return weekEvents[dayName][aId].startTime < weekEvents[dayName][bId].startTime ? -1 : 1
                })
                .map(id => ({...weekEvents[dayName][id], id}))
            }

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
                  {dayEvents.map((event, index) => {
                    return (
                      <div key={`${event.name}-${index}`} className="event-container">
                        <div className="event-time">
                          <Icon style={{fontSize: '15px'}}>alarm</Icon>
                          <span className="text">{`${event.startTime} - ${event.endTime}`}</span>
                        </div>
                        <div className="event-name">
                          <Icon style={{fontSize: '15px'}}>date_range</Icon>
                          <span className="text">{event.name}</span>
                        </div>
                        <div className="event-owner">
                          <Icon style={{fontSize: '15px'}}>account_circle</Icon>
                          <span className="text">{event.ownerId}</span>
                        </div>
                        <div className="controls">
                          <div className="edit-button button" onClick={createEditEventCallback(event)}>
                            <Icon style={{fontSize: '15px'}}>edit</Icon>
                          </div>
                          <div className="remove-button button" onClick={this.createRemoveEventCallback(event, event.id)}>
                            <Icon style={{fontSize: '15px'}}>highlight_off</Icon>
                          </div>
                        </div>
                      </div>
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

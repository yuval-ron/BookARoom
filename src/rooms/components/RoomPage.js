import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {get} from 'lodash'
import Dialog from '@material-ui/core/Dialog'
import {getAllUsers} from '../../users/actions'
import {createNewEvent, getAllEventsOfCurrentWeekByRoomId, removeEvent} from '../../events/actions'
import NewEventForm from '../../events/components/NewEventForm'
import Calendar from '../../events/components/Calendar'
import {getWeekId} from '../../commons/utils'

const defaultNewEvent = {
  name: '',
  date: moment().toISOString(),
  startTime: moment().format('hh:mm'),
  endTime: moment().format('hh:mm'),
  ownerId: ''
}

class RoomPage extends Component {
  state = {
    newEvent: {...defaultNewEvent},
    errorMessage: '',
    isNewEventDialogOpen: false
  }

  componentDidMount() {
    const {getAllUsers, getAllEventsOfCurrentWeekByRoomId, params} = this.props
    const roomId = params.id

    getAllUsers()
    getAllEventsOfCurrentWeekByRoomId(roomId)
  }

  createOnChangeCallback = (fieldName) => {
    return (e) => {
      const {newEvent} = this.state

      this.setState({
        newEvent: {
          ...newEvent,
          [fieldName]: e.target.value
        }
      })
    }
  }

  createHandleAddNewEventClickCallback = (dayMoment) => {
    return () => this.handleAddNewEventClick(dayMoment)
  }

  handleAddNewEventClick = (dayMoment) => {
    const {newEvent} = this.state

    this.setState({
      newEvent: {
        ...newEvent,
        date: dayMoment.toISOString()
      }
    })
    this.openNewEventDialog()
  }

  openNewEventDialog = () => {
    this.setState({isNewEventDialogOpen: true})
  }

  closeNewEventDialog = () => {
    this.setState({isNewEventDialogOpen: false})
  }

  createEditEventCallback = (event) => {
    return () => {
      this.setState({newEvent: event})
      this.openNewEventDialog()
    }
  }

  handleCreateNewEvent = () => {
    const {createNewEvent, params, events} = this.props
    const {newEvent} = this.state
    const dayOfNewEvent = moment(newEvent.date).format('dddd')
    const existingEventsOnSameDay = get(events, `${params.id}.${getWeekId()}.${dayOfNewEvent}`, {})
    const conflictEventId = this.getEventIdOfConflictWithNewEvent(newEvent, existingEventsOnSameDay)
    const conflictEvent = existingEventsOnSameDay[conflictEventId]

    if (!newEvent.name) {
      this.setState({errorMessage: 'Please fill event name.'})
    } else if (!newEvent.ownerId) {
      this.setState({errorMessage: 'Please select event owner.'})
    } else if (newEvent.startTime >= newEvent.endTime) {
      this.setState({errorMessage: 'Event start time must be before end time.'})
    } else if (conflictEvent) {
      this.setState({errorMessage: `You can\'t create an event at the same time with: "${conflictEvent.name}" by ${conflictEvent.ownerId}.`})
    } else {
      createNewEvent({...newEvent, roomId: params.id}).then(this.closeNewEventDialog)
      this.setState({newEvent: {...defaultNewEvent}, errorMessage: ''})
    }

  }

  getEventIdOfConflictWithNewEvent = (newEvent, existingEventsOnSameDay) => {
    return Object.keys(existingEventsOnSameDay).find(eventId => {
      const event = existingEventsOnSameDay[eventId]

      return (
        (event.startTime > newEvent.startTime && newEvent.endTime > event.endTime) ||
        (event.startTime < newEvent.startTime && newEvent.startTime < event.endTime) ||
        (event.startTime < newEvent.endTime && newEvent.endTime < event.endTime)
      )
    })
  }

  render() {
    const {params, rooms, users, events, removeEvent} = this.props
    const {newEvent, isNewEventDialogOpen, errorMessage} = this.state
    const {id} = params
    const room = rooms[id]
    const formButtons = [
      {name: 'Cancel', onClick: this.closeNewEventDialog},
      {name: 'Create', onClick: this.handleCreateNewEvent, isPrimary: true},
    ]

    if (!room) {
      return null
    }

    return (
      <div>
        <Calendar
          createHandleAddNewEventClickCallback={this.createHandleAddNewEventClickCallback}
          weekEvents={get(events, `${id}.${getWeekId()}`, {})}
          removeEvent={removeEvent}
          createEditEventCallback={this.createEditEventCallback}
        />
        <Dialog open={isNewEventDialogOpen}>
          <NewEventForm
            newEvent={newEvent}
            createOnChangeCallback={this.createOnChangeCallback}
            formButtons={formButtons}
            room={room}
            users={users}
            errorMessage={errorMessage}
          />
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    rooms: store.roomsData.rooms,
    users: store.usersData.users,
    events: store.eventsData.events
  }
}

const mapDispatchToProps = {getAllUsers, createNewEvent, getAllEventsOfCurrentWeekByRoomId, removeEvent}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage)

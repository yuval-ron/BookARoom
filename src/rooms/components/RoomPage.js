import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {get} from 'lodash'
import Dialog from '@material-ui/core/Dialog'
import {getAllUsers} from '../../users/actions'
import {createNewEvent, getAllEventsOfCurrentWeekByRoomId} from '../../events/actions'
import NewEventForm from '../../events/components/NewEventForm'
import Calendar from '../../events/components/Calendar'
import {getWeekId} from '../../commons/utils'

class RoomPage extends Component {
  state = {
    newEvent: {
      name: '',
      date: moment().toISOString(),
      startTime: moment().format('hh:mm'),
      endTime: moment().format('hh:mm'),
      ownerId: ''
    },
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

  handleCreateNewEvent = () => {
    const {createNewEvent, params} = this.props
    const {newEvent} = this.state

    createNewEvent({...newEvent, roomId: params.id}).then(this.closeNewEventDialog)
  }

  render() {
    const {params, rooms, users, events} = this.props
    const {newEvent, isNewEventDialogOpen} = this.state
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
        />
        <Dialog open={isNewEventDialogOpen}>
          <NewEventForm
            newEvent={newEvent}
            createOnChangeCallback={this.createOnChangeCallback}
            formButtons={formButtons}
            room={room}
            users={users}
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

const mapDispatchToProps = {getAllUsers, createNewEvent, getAllEventsOfCurrentWeekByRoomId}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage)

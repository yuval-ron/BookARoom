import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import Dialog from '@material-ui/core/Dialog'
import {getAllUsers} from '../../users/actions'
import {createNewEvent} from '../../events/actions'
import NewEventForm from '../../events/components/NewEventForm'
import Calendar from '../../events/components/Calendar'

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
    const {getAllUsers} = this.props

    getAllUsers()
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

    createNewEvent({...newEvent, roomId: params.id})
  }

  render() {
    const {params, rooms, users} = this.props
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
        <Calendar createHandleAddNewEventClickCallback={this.createHandleAddNewEventClickCallback} />
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
    users: store.usersData.users
  }
}

const mapDispatchToProps = {getAllUsers, createNewEvent}

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage)

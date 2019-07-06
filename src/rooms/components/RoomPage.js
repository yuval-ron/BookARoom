import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import NewEventForm from '../../events/components/NewEventForm'

class RoomPage extends Component {
  state = {
    newEvent: {
      name: '',
      startTime: moment().format('YYYY-MM-DDThh:mm'),
      endTime: moment().format('YYYY-MM-DDThh:mm'),
      ownerId: ''
    }
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

  render() {
    const {params, rooms} = this.props
    const {newEvent} = this.state
    const {id} = params
    const room = rooms[id]
    const formButtons = [
      {name: 'Clear', onClick: () => {}},
      {name: 'Create', onClick: () => {}, isPrimary: true},
    ]

    if (!room) {
      return null
    }

    return null

    // return (
    //   <NewEventForm
    //     newEvent={newEvent}
    //     room={room}
    //     formButtons={formButtons}
    //     createOnChangeCallback={this.createOnChangeCallback}
    //   />
    // )
  }
}

const mapStateToProps = (store) => {
  return {
    rooms: store.roomsData.rooms
  }
}

export default connect(mapStateToProps)(RoomPage)

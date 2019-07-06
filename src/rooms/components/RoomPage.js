import React, {Component} from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import TextField from '@material-ui/core/TextField'
import FormContainer from '../../commons/components/FormContainer'

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

    return (
      <FormContainer title={`Create new event in room: ${room.name}`} buttons={formButtons}>
        <TextField
          id="name"
          label="Event name"
          value={newEvent.name}
          onChange={this.createOnChangeCallback('name')}
        />
        <TextField
          id="startTime"
          label="Event start time"
          type="datetime-local"
          value={newEvent.startTime}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.createOnChangeCallback('startTime')}
        />
        <TextField
          id="endTime"
          label="Event end time"
          type="datetime-local"
          value={newEvent.endTime}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={this.createOnChangeCallback('endTime')}
        />
        <TextField
          id="ownerId"
          label="Event owner id"
          value={newEvent.ownerId}
          onChange={this.createOnChangeCallback('ownerId')}
        />
      </FormContainer>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    rooms: store.roomsData.rooms
  }
}

export default connect(mapStateToProps)(RoomPage)

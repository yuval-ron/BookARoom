import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import FormContainer from '../../commons/components/FormContainer'

class NewEventForm extends Component {
  render() {
    const {newEvent, createOnChangeCallback, formButtons, room} = this.props

    return (
      <FormContainer title={`Create new event in room: ${room.name}`} buttons={formButtons}>
        <TextField
          id="name"
          label="Event name"
          value={newEvent.name}
          style={{width: '230px'}}
          onChange={createOnChangeCallback('name')}
        />
        <TextField
          id="startTime"
          label="Event start time"
          type="time"
          value={newEvent.startTime}
          InputLabelProps={{shrink: true}}
          style={{width: '230px'}}
          onChange={createOnChangeCallback('startTime')}
        />
        <TextField
          id="endTime"
          label="Event end time"
          type="time"
          value={newEvent.endTime}
          InputLabelProps={{shrink: true}}
          style={{width: '230px'}}
          onChange={createOnChangeCallback('endTime')}
        />
        <TextField
          id="ownerId"
          label="Event owner id"
          value={newEvent.ownerId}
          style={{width: '230px'}}
          onChange={createOnChangeCallback('ownerId')}
        />
      </FormContainer>
    )
  }
}

export default NewEventForm

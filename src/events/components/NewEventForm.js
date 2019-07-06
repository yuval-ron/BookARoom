import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormContainer from '../../commons/components/FormContainer'
import moment from 'moment'

class NewEventForm extends Component {
  render() {
    const {newEvent, createOnChangeCallback, formButtons, room, users} = this.props

    return (
      <FormContainer title={`Create new event in room: ${room.name}`} buttons={formButtons}>
        <div>{`The event is planned for: ${moment(newEvent.date).format("MMM Do YY")}`}</div>
        <TextField
          id="name"
          label="Event name"
          value={newEvent.name}
          style={{width: '230px'}}
          onChange={createOnChangeCallback('name')}
        />
        <TextField
          id="startTime"
          label="Start time"
          type="time"
          value={newEvent.startTime}
          InputLabelProps={{shrink: true}}
          style={{width: '230px'}}
          onChange={createOnChangeCallback('startTime')}
        />
        <TextField
          id="endTime"
          label="End time"
          type="time"
          value={newEvent.endTime}
          InputLabelProps={{shrink: true}}
          style={{width: '230px'}}
          onChange={createOnChangeCallback('endTime')}
        />
        <FormControl>
          <InputLabel>Owner username</InputLabel>
          <Select value={newEvent.ownerId} style={{width: '230px'}} placeholder="Owner username">
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {Object.keys(users).map(username => {
              return <MenuItem key={username} value={username}>{username}</MenuItem>
            })}
          </Select>
        </FormControl>
      </FormContainer>
    )
  }
}

export default NewEventForm

import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import FormContainer from '../../commons/components/FormContainer'

import './NewUserForm.css'

export default class NewUserForm extends Component {
  state = {
    username: '',
    password: ''
  }

  clearFields = () => {
    this.setState({username: '', password: ''})
  }

  createNewUser = () => {
    const {createNewUser} = this.props
    const {username, password} = this.state

    createNewUser(username, password).then(this.clearFields)
  }

  createOnChangeCallback = (fieldName) => {
    return (e) => {
      this.setState({
        [fieldName]: e.target.value
      })
    }
  }

  render() {
    const {username, password} = this.state
    const buttons = [
      {name: 'Clear', onClick: this.clearFields},
      {name: 'Create', onClick: this.createNewUser, isPrimary: true}
    ]

    return (
      <FormContainer title="Create new user" buttons={buttons}>
        <div className="new-user-inputs-container">
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={this.createOnChangeCallback('username')}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.createOnChangeCallback('password')}
          />
        </div>
      </FormContainer>
    )
  }
}

import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './NewUserForm.css'

export default class NewUserForm extends Component {
  state = {
    username: '',
    password: ''
  }

  clearFields = () => {
    this.setState({username: '', password: ''})
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

    return (
      <div className="new-user-form-container">
        <h4>Create new user:</h4>
        <div className="inputs-container">
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
        <div className="controls">
          <Button variant="contained" onClick={this.clearFields}>
            Clear
          </Button>
          <Button variant="contained" color="primary">
            Create
          </Button>
        </div>
      </div>
    )
  }
}

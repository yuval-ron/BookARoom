import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField'
import FormContainer from '../../commons/components/FormContainer'

import './LoginPage.css'

export default class LoginPage extends Component {
  state = {
    username: '',
    password: ''
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
      {name: 'Login', onClick: ()=>{}, isPrimary: true}
    ]

    return (
      <div className="login-page">
        <FormContainer title="Please login to Book a Room" buttons={buttons}>
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
        </FormContainer>
      </div>
    )
  }
}

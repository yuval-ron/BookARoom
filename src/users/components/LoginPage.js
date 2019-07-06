import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getAllUsers} from '../actions'
import TextField from '@material-ui/core/TextField'
import FormContainer from '../../commons/components/FormContainer'

import './LoginPage.css'

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: ''
  }

  componentDidMount() {
    const {getAllUsers} = this.props

    getAllUsers()
  }

  createOnChangeCallback = (fieldName) => {
    return (e) => {
      this.setState({
        [fieldName]: e.target.value
      })
    }
  }

  login = () => {
    const {users, router} = this.props
    const {username, password} = this.state
    const isCorrectLogin = users[username] && users[username].password === password

    if (isCorrectLogin) {
      router.replace('/home')
    } else {
      this.setState({errorMessage: 'Wrong username or password'})
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    const buttons = [
      {name: 'Login', onClick: this.login, isPrimary: true}
    ]

    return (
      <div className="login-page">
        <FormContainer
          title="Please login to Book a Room"
          buttons={buttons}
          errorMessage={errorMessage}
        >
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

const mapStateToProps = (store) => {
  return {
    users: store.usersData.users
  }
}

const mapDispatchToProps = {getAllUsers}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)

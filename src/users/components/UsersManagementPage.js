import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createNewUser, getAllUsers} from '../actions'
import NewUserForm from './NewUserForm'
import Icon from '@material-ui/core/Icon'
import './UsersManagementPage.css'

class UsersManagementPage extends Component {
  componentDidMount() {
    const {getAllUsers} = this.props

    getAllUsers()
  }

  render() {
    const {createNewUser, isLoading, users} = this.props

    return (
      <div className="users-management-container">
        <NewUserForm createNewUser={createNewUser} />

        {isLoading && <div>loading...</div>}
        <div className="users-list-container">
          {Object.keys(users).map(userId => {
            const {username, password} = users[userId]
            return (
              <div key={userId} className="user-item">
                <div className="username">
                  <Icon>account_circle</Icon>
                  <span className="label">{username}</span>
                </div>
                <div className="password">
                  <Icon>vpn_key</Icon>
                  <span className="label">{password}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.usersData.isLoading,
    users: store.usersData.users
  }
}

const mapDispatchToProps = {createNewUser, getAllUsers}

export default connect(mapStateToProps, mapDispatchToProps)(UsersManagementPage)

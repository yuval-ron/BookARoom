import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createNewUser, getAllUsers} from '../actions'
import NewUserForm from './NewUserForm'

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

        {Object.keys(users).map(userId => {
          const {username, password} = users[userId]
          return (
            <div key={userId}>{username} - {password}</div>
          )
        })}
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

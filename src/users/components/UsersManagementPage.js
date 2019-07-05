import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createNewUser} from '../actions'
import NewUserForm from './NewUserForm'

class UsersManagementPage extends Component {
  render() {
    const {createNewUser, isLoading} = this.props

    return (
      <div className="users-management-container">
        <NewUserForm createNewUser={createNewUser} />

        {isLoading && <div>loading...</div>}
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    isLoading: store.users.isLoading
  }
}

const mapDispatchToProps = {createNewUser}

export default connect(mapStateToProps, mapDispatchToProps)(UsersManagementPage)

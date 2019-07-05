import React, {Component} from 'react';
import NewUserForm from './NewUserForm'

export default class UsersManagementPage extends Component {
  render() {
    return (
      <div className="users-management-container">
        <NewUserForm />
      </div>
    )
  }
}

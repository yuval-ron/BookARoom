import React, {Component} from 'react';
import './HomePage.css';
import MainActionButton from './commons/components/MainActionButton'

export default class HomePage extends Component {
  goToUsersManagementPage = () => {
    const {router} = this.props

    router.replace('/users-management')
  }

  goToEventsManagementPage = () => {
    const {router} = this.props

    router.replace('/events-management')
  }

  render() {
    return (
      <div className="home-page">
        <div className="main-actions-container">
          <MainActionButton text="Manage users" iconName="group" onClick={this.goToUsersManagementPage} />
          <MainActionButton text="Create new event" iconName="date_range" onClick={this.goToEventsManagementPage}/>
        </div>
      </div>
    );
  }
}

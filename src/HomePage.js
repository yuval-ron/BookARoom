import React, {Component} from 'react';
import './HomePage.css';
import MainActionButton from './commons/components/MainActionButton'

export default class HomePage extends Component {
  goToUserManagementPage = () => {
    const {router} = this.props

    router.replace('/users-management')
  }

  render() {
    return (
      <div className="home-page">
        <div className="main-actions-container">
          <MainActionButton text="Create new user" iconName="group" onClick={this.goToUserManagementPage} />
          <MainActionButton text="Create new event" iconName="date_range" />
        </div>
      </div>
    );
  }
}

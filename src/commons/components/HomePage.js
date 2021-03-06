import React, {Component} from 'react';
import './HomePage.css';
import MainActionButton from './MainActionButton'

export default class HomePage extends Component {
  createGoToCallback = (path) => {
    return () => {
      const {router} = this.props

      router.replace(path)
    }
  }

  render() {
    return (
      <div className="home-page">
        <div className="main-actions-container">
          <MainActionButton text="Manage users" iconName="group" onClick={this.createGoToCallback('users-management')} />
          <MainActionButton text="Manage Events" iconName="date_range" onClick={this.createGoToCallback('events-management')}/>
        </div>
      </div>
    );
  }
}

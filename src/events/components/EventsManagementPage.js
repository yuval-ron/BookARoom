import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllRooms} from '../../rooms/actions'
import RoomsList from '../../rooms/components/RoomsList'
import './EventsManagementPage.css'

class EventsManagementPage extends Component {
  componentDidMount() {
    const {getAllRooms} = this.props

    getAllRooms()
  }

  render() {
    const {rooms, isLoading} = this.props

    return (
      <div className="events-management-container">
        {!isLoading && <div className="title">Please choose room to book an event:</div>}
        <RoomsList isLoading={isLoading} rooms={rooms} />
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    rooms: store.roomsData.rooms,
    isLoading: store.roomsData.isLoading
  }
}

const mapDispatchToProps = {getAllRooms}

export default connect(mapStateToProps, mapDispatchToProps)(EventsManagementPage)

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllRooms} from '../../rooms/actions'
import RoomsList from '../../rooms/components/RoomsList'
import './EventsManagementPage.css'

class EventsManagementPage extends Component {
  state = {
    selectedRoomId: ''
  }

  componentDidMount() {
    const {getAllRooms} = this.props

    getAllRooms()
  }

  createHandleRoomClickCallback = (roomId) => {
    return () => {
      const {router} = this.props

      this.setState({selectedRoomId: roomId})
      router.replace(`/events-management/rooms/${roomId}`)
    }
  }

  render() {
    const {rooms, isLoading, children} = this.props
    const {selectedRoomId} = this.state

    return (
      <div className="events-management-container">
        {!isLoading && <div className="title">Please choose room to book an event:</div>}
        <RoomsList
          isLoading={isLoading}
          selectedRoomId={selectedRoomId}
          rooms={rooms}
          createHandleRoomClickCallback={this.createHandleRoomClickCallback}
        />
        {children}
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

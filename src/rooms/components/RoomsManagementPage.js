import React, {Component} from 'react'
import {connect} from 'react-redux'
import RoomsList from './RoomsList'
import {getAllRooms} from '../../rooms/actions'

class RoomsManagementPage extends Component {
  componentDidMount() {
    const {getAllRooms} = this.props

    getAllRooms()
  }

  createHandleRoomClickCallback = (roomId) => {
    return () => {
      const {router} = this.props

      router.replace(`/events-management/rooms/${roomId}`)
    }
  }

  render() {
    const {rooms, isLoading} = this.props

    return (
      <div className="rooms-management-container">
        <RoomsList isLoading={isLoading} rooms={rooms} createHandleRoomClickCallback={this.createHandleRoomClickCallback} />
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

export default connect(mapStateToProps, mapDispatchToProps)(RoomsManagementPage)

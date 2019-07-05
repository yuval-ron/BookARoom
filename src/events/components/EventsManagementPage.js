import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllRooms} from '../../rooms/actions'

class EventsManagementPage extends Component {
  componentDidMount() {
    const {getAllRooms} = this.props

    getAllRooms()
  }

  render() {
    const {rooms, isLoading} = this.props

    return (
      <div className="events-management-container">
        {isLoading && <div>loading...</div>}
        {Object.keys(rooms).map(roomId => {
          const room = rooms[roomId]
          return <div className="room-item" key={roomId}>{room.name}</div>
        })}
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

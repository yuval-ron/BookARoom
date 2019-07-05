import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon';

import './RoomsList.css'

export default class RoomsList extends Component {
  render() {
    const {rooms, isLoading} = this.props

    return (
      <div className="rooms-list-container">
        {isLoading && <div>loading...</div>}
        {Object.keys(rooms).map(roomId => {
          const room = rooms[roomId]
          return <RoomItem key={roomId} room={room} />
        })}
      </div>
    )
  }
}

const RoomItem = ({room}) => {
  const {name, color} = room

  return (
    <div className="room-item">
      <Icon>event_seat</Icon>
      <span className="name">{room.name}</span>
    </div>
  )
}

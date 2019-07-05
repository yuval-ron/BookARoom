import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon';

import './RoomsList.css'

export default class RoomsList extends Component {
  render() {
    const {rooms, isLoading, createHandleRoomClickCallback} = this.props

    return (
      <div className="rooms-list-container">
        {isLoading && <div>loading...</div>}
        {Object.keys(rooms).map(roomId => {
          const room = rooms[roomId]
          return <RoomItem key={roomId} room={room} onClick={createHandleRoomClickCallback(roomId)} />
        })}
      </div>
    )
  }
}

const RoomItem = ({room, onClick}) => {
  const {name, color} = room

  return (
    <div className="room-item" onClick={onClick}>
      <Icon>event_seat</Icon>
      <span className="name">{room.name}</span>
    </div>
  )
}

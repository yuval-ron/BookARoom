import React, {Component} from 'react'
import Icon from '@material-ui/core/Icon';

import './RoomsList.css'

export default class RoomsList extends Component {
  render() {
    const {rooms, isLoading, createHandleRoomClickCallback, selectedRoomId} = this.props

    return (
      <div className="rooms-list-container">
        {isLoading && <div>loading...</div>}
        {Object.keys(rooms).map(roomId => {
          const room = rooms[roomId]
          const isSelected = roomId === selectedRoomId
          return <RoomItem key={roomId} isSelected={isSelected} room={room} onClick={createHandleRoomClickCallback(roomId)} />
        })}
      </div>
    )
  }
}

const RoomItem = ({room, isSelected, onClick}) => {
  return (
    <div className={`room-item ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <Icon>event_seat</Icon>
      <span className="name">{room.name}</span>
    </div>
  )
}

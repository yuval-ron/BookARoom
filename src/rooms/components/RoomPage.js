import React, {Component} from 'react'
import {connect} from 'react-redux'

class RoomPage extends Component {
  render() {
    const {params, rooms} = this.props
    const {id} = params
    const room = rooms[id]

    if (!room) {
      return null
    }

    return (
      <div>{room.name}</div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    rooms: store.roomsData.rooms
  }
}

export default connect(mapStateToProps)(RoomPage)

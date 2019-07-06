import api from '../../services/api'

export const createNewEvent = (event) => {
  return (dispatch) => {
    dispatch({type: 'EVENTS@CREATE_EVENT_LOADING'})

    return api.createNewEvent(event).then(() => {
      dispatch({type: 'EVENTS@CREATE_EVENT_SUCCESS'})
      return dispatch(getAllEventsOfCurrentWeekByRoomId(event.roomId))
    })
  }
}

export const removeEvent = (event, eventId) => {
  return (dispatch) => {
    dispatch({type: 'EVENTS@REMOVE_EVENT_LOADING'})

    return api.removeEvent(event, eventId).then(() => {
      dispatch({type: 'EVENTS@REMOVE_EVENT_SUCCESS'})
      return dispatch(getAllEventsOfCurrentWeekByRoomId(event.roomId))
    })
  }
}

export const getAllEventsOfCurrentWeekByRoomId = (roomId) => {
  return (dispatch) => {
    dispatch({type: 'EVENTS@GET_EVENTS_OF_WEEK_BY_ROOM_LOADING'})

    return api.getAllEventsOfCurrentWeekByRoomId(roomId).then((data) => {
      return dispatch({type: 'EVENTS@GET_EVENTS_OF_WEEK_BY_ROOM_SUCCESS', payload: {
        data,
        roomId
      }})
    })
  }
}

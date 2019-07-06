import api from '../../services/api'

export const createNewEvent = (event) => {
  return (dispatch) => {
    dispatch({type: 'EVENTS@CREATE_EVENT_LOADING'})

    return api.createNewEvent(event).then(() => {
      return dispatch({type: 'EVENTS@CREATE_EVENT_SUCCESS'})
      // return dispatch(getAllUsers())
    })
  }
}

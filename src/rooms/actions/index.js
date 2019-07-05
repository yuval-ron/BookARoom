import api from '../../services/api'

export const getAllRooms = () => {
  return (dispatch) => {
    dispatch({type: 'ROOMS@GET_ALL_ROOMS_LOADING'})

    return api.getAllRooms().then((data) => {
      return dispatch({type: 'ROOMS@GET_ALL_ROOMS_SUCCESS', payload: data})
    })
  }
}

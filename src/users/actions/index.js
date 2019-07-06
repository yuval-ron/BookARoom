import api from '../../services/api'

export const createNewUser = (username, password) => {
  return (dispatch) => {
    dispatch({type: 'USERS@CREATE_USER_LOADING'})

    return api.createNewUser(username, password).then(() => {
      dispatch({type: 'USERS@CREATE_USER_SUCCESS'})
      return dispatch(getAllUsers())
    })
  }
}

export const getAllUsers = () => {
  return (dispatch) => {
    dispatch({type: 'USERS@GET_ALL_USERS_LOADING'})

    return api.getAllUsers().then((data) => {
      return dispatch({type: 'USERS@GET_ALL_USERS_SUCCESS', payload: data})
    })
  }
}

export const setCurrentUser = (username) => {
  return {type: 'USERS@SET_CURRENT_USER', payload: username}
}

const defaultState = {
  isLoading: false,
  users: {},
  currentUser: ''
}

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case 'USERS@CREATE_USER_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'USERS@CREATE_USER_SUCCESS': {
      return {
        ...state,
        isLoading: false
      }
    }

    case 'USERS@GET_ALL_USERS_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'USERS@GET_ALL_USERS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        users: payload
      }
    }

    case 'USERS@SET_CURRENT_USER': {
      return {
        ...state,
        currentUser: payload
      }
    }

    default: {
      return state
    }
  }
}

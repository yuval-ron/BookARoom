const defaultState = {
  isLoading: false,
  users: {}
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

    default: {
      return state
    }
  }
}

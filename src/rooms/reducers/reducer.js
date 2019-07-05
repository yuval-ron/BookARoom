const defaultState = {
  isLoading: false,
  rooms: {}
}

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case 'ROOMS@GET_ALL_ROOMS_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'ROOMS@GET_ALL_ROOMS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        rooms: payload
      }
    }

    default: {
      return state
    }
  }
}

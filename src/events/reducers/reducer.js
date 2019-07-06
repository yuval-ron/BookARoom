const defaultState = {
  isLoading: false,
  events: {}
}

export default (state = defaultState, {type, payload}) => {
  switch (type) {
    case 'EVENTS@CREATE_EVENT_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'EVENTS@CREATE_EVENT_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        events: payload
      }
    }

    default: {
      return state
    }
  }
}

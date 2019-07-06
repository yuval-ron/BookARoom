import {get} from 'lodash'
import {getWeekId} from '../../commons/utils'

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

    case 'EVENTS@GET_EVENTS_OF_WEEK_BY_ROOM_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }

    case 'EVENTS@GET_EVENTS_OF_WEEK_BY_ROOM_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        events: {
          ...state.events,
          [payload.roomId]: {
            ...get(state, `events[${payload.roomId}]`, {}),
            [getWeekId()]: payload.data
          }
        }
      }
    }

    default: {
      return state
    }
  }
}

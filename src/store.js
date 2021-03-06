import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from './users/reducers/reducer'
import roomsReducer from './rooms/reducers/reducer'
import eventsReducer from './events/reducers/reducer'

const rootReducer = combineReducers({
  usersData: usersReducer,
  eventsData: eventsReducer,
  roomsData: roomsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))

import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import usersReducer from './users/reducers/reducer'

const rootReducer = combineReducers({
  data: reducer,
  users: usersReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))

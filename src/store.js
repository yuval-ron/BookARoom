import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer.js'

const rootReducer = combineReducers({
  data: reducer
})

export default createStore(rootReducer, applyMiddleware(thunk))

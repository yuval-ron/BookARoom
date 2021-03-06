import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory } from 'react-router'

import './index.css'
import App from './commons/components/App'
import HomePage from './commons/components/HomePage'
import UsersManagementPage from './users/components/UsersManagementPage'
import EventsManagementPage from './events/components/EventsManagementPage'
import RoomsManagementPage from './rooms/components/RoomsManagementPage'
import RoomPage from './rooms/components/RoomPage'
import LoginPage from './users/components/LoginPage'
import * as serviceWorker from './serviceWorker'
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <Route path='login' component={LoginPage} />
        <Route path="home" component={HomePage} />
        <Route path='users-management' component={UsersManagementPage} />
        <Route path='rooms-management' component={RoomsManagementPage} />
        <Route path='events-management' component={EventsManagementPage}>
          <Route path="rooms/:id" component={RoomPage} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

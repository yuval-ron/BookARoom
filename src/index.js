import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'

import './index.css'
import App from './App'
import HomePage from './HomePage'
import UsersManagementPage from './users/components/UsersManagementPage'
import EventsManagementPage from './events/components/EventsManagementPage'
import * as serviceWorker from './serviceWorker'
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={HomePage} />
        <Route path='users-management' component={UsersManagementPage} />
        <Route path='events-management' component={EventsManagementPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

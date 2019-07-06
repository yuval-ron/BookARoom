import React, {Component} from 'react';
import {connect} from 'react-redux'
import {setCurrentUser} from './users/actions'

import AppBar from './commons/components/AppBar'

class App extends Component {
  componentDidMount() {
    this.goToCorrectLocation()
  }

  componentDidUpdate() {
    this.goToCorrectLocation()
  }

  goToCorrectLocation = () => {
    const {router, currentUser} = this.props

    if (!currentUser && router.getCurrentLocation().pathname !== '/login') {
      router.replace('/login')
    } else if (router.getCurrentLocation().pathname === '/') {
      router.replace('/home')
    }
  }

  goToRoot = () => {
    const {router} = this.props

    router.replace('/')
  }

  logout = () => {
    const {setCurrentUser} = this.props

    setCurrentUser('')
  }

  render() {
    const {children, currentUser} = this.props

    return (
      <div>
        <AppBar goToRoot={this.goToRoot} currentUser={currentUser} logout={this.logout} />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (store) =>{
  return {
    currentUser: store.usersData.currentUser
  }
}

const mapDispatchToProps = {setCurrentUser}

export default connect(mapStateToProps, mapDispatchToProps)(App)

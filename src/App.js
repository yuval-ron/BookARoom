import React, {Component} from 'react';

import AppBar from './commons/components/AppBar'

export default class App extends Component {
  componentDidMount() {
    this.goToCorrectLocation()
  }

  componentDidUpdate() {
    this.goToCorrectLocation()
  }

  goToCorrectLocation = () => {
    const {router} = this.props

    if (router.getCurrentLocation().pathname === '/') {
      router.replace('/home')
    }
  }

  goToRoot = () => {
    const {router} = this.props

    router.replace('/')
  }

  render() {
    const {children} = this.props

    return (
      <div>
        <AppBar goToRoot={this.goToRoot} />
        {children}
      </div>
    )
  }
}

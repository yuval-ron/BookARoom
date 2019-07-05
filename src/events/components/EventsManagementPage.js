import React, {Component} from 'react'
import {connect} from 'react-redux'

class EventsManagementPage extends Component {
  render() {
    return (
      <div className="events-management-container">
        blah
      </div>
    )
  }
}

const mapStateToProps = (store) => {
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(EventsManagementPage)

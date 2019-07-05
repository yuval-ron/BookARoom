import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import './AppBar.css'

export default class BookARoomAppBar extends Component {
  render() {
    const {goToRoot} = this.props

    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="app-logo" onClick={goToRoot}>
            Book a Room
          </Typography>
          <div className="user-contorls-container">
            <Button color="inherit">
              <Icon>account_circle</Icon>
              <span className="button-text">Login</span>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

import './FormContainer.css'

export default class FormContainer extends Component {
  render() {
    const {children, title, buttons, errorMessage} = this.props

    return (
      <div className="form-container">
        <h4>{title}</h4>
        {children}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="controls">
          {buttons.map((button, index) => {
            return (
              <Button
                key={`${button.name}-${index}`}
                variant="contained"
                color={button.isPrimary ? 'primary' : 'default'}
                onClick={button.onClick}
              >
                {button.name}
              </Button>
            )
          })}
        </div>
      </div>
    )
  }
}

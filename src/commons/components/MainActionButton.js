import React from 'react';
import Icon from '@material-ui/core/Icon';

import './MainActionButton.css'

const MainActionButton = ({text, iconName, onClick}) => {
  return (
    <div className="main-action-button" onClick={onClick}>
      <Icon>{iconName}</Icon>
      <span className="button-text">{text}</span>
    </div>
  )
}

export default MainActionButton

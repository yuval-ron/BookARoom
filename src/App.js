import React from 'react';
import './App.css';
import AppBar from './commons/components/AppBar'
import MainActionButton from './commons/components/MainActionButton'

function App() {
  return (
    <div className="App">
      <AppBar />
      <div className="main-actions-container">
        <MainActionButton text="Create new user" iconName="group" />
        <MainActionButton text="Create new event" iconName="date_range" />
      </div>
    </div>
  );
}

export default App;

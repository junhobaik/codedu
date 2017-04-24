import React, { Component } from 'react';
import './Header.css';
import LoginButton from '../LoginButton/LoginButton';
import User from '../User/User';
import Logo from '../Logo/Logo';

class App extends Component {
  render() {
    return (
      <div className="header-wrap">
            <Logo/>
            <LoginButton/>
            <User/>
      </div>
    );
  }
}

export default App;
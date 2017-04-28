import React, { Component } from 'react';
import './Header.css';
import LoginButton from '../LoginButton/LoginButton';
import User from '../User/User';
import Logo from '../Logo/Logo';

class App extends Component {
  render() {
    const {onClick, isLogin, userName, message} = this.props;

    return (
      <div className="header-wrap">
            <Logo isLogin={isLogin} />
            
            {isLogin ? <User userName={userName}/> : <LoginButton onClick={onClick} message={message} />}
            {/*<LoginButton
              onClick={onClick}
            />
            <User/>*/}
      </div>
    );
  }
}

export default App;

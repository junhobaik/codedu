import React, { Component } from 'react';
import './Header.css';
import LoginButton from '../LoginButton/LoginButton';
import User from '../User/User';
import Logo from '../Logo/Logo';

class App extends Component {
  render() {
    /* onClick[0] = login, onClick[1] = logOut */
    const {onClick, isLogin, userName, message} = this.props;

    return (
      <div className="header-wrap">
            <Logo isLogin={isLogin} />
            
            {isLogin ? <User onClick={onClick[1]} userName={userName}/> : <LoginButton onClick={onClick[0]} message={message} />}
            {/*<LoginButton
              onClick={onClick}
            />
            <User/>*/}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Header.css';
import LoginButton from '../LoginButton/LoginButton';
import User from '../User/User';
import Logo from '../Logo/Logo';

class App extends Component {

  render() {
    /* onClick[0] = login, onClick[1] = logOut */
    const {onClick, message} = this.props;

    return (
      <div className="header-wrap">
            <Logo />
            { sessionStorage.getItem('useremail') ?
              <User onClick={onClick[1]} userName={sessionStorage.getItem('useremail')} userPhoto={sessionStorage.getItem('usericon')} /> 
              :
              <LoginButton onClick={onClick[0]} message={message} />
            }
            {/*<Logo isLogin={isLogin} />*/}
            {/*{isLogin ? <User onClick={onClick[1]} userName={userName} userPhoto={userPhoto} /> : <LoginButton onClick={onClick[0]} message={message} />}*/}
      </div>
    );
  }
}

export default App;

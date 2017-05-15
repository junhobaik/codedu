import React, { Component } from 'react';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import {browserHistory} from 'react-router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import scoreReducer from './store/reducer';
const store = createStore(scoreReducer);

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      isLogin: false,
      message: null,
      userName: null,
      userPhoto: null
    }
  }

  login = (evt) => {
    console.log(evt.target.parentElement[0].value);
    evt.preventDefault();
    const form = evt.target.parentElement;

    fetch('/api/user', {
      method: 'POST',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials : 'same-origin',
      body: JSON.stringify({
        email: form[0].value,
        password: form[1].value
      })
    })
    .then((response) => {
      console.log("response");
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      
      if(responseData.isLogin) {
        this.setState({isLogin: responseData.isLogin, message: responseData.message, userName: responseData.userName, userPhoto: responseData.photo});
        browserHistory.push('/main');
      } else {
        this.setState({isLogin: responseData.isLogin, message: responseData.message})
      }
      
    })
    .catch((error) => {
      console.log('Error Fetch', error);
    })
  }

  logOut = () => {
      fetch('/api/logout', {
          method: 'get',
          credentials : 'same-origin'
      })
      .then((response) => {
        console.log(response);
        if(response.status === 200) {
            this.setState({isLogin: false, message: null, userName: null});
            browserHistory.push('/');
        }  
      });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="wrap">
          <Header
            onClick={[this.login, this.logOut]}
            isLogin={this.state.isLogin}
            userName={this.state.userName}
            message={this.state.message}
            userPhoto={this.state.userPhoto}
          />
          <div className="content-wrap">
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import {browserHistory} from 'react-router';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      isLogin: false,
      message: null,
      userName: null
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
      
      this.setState({isLogin: responseData.isLogin, message: responseData.message, userName: responseData.userName});
      if(responseData.isLogin) browserHistory.push('/main');
    })
    .catch((error) => {
      console.log('Error Fetch', error);
    })
  }

  render() {
    return (
      <div className="wrap">
        <Header
          onClick={this.login}
          isLogin={this.state.isLogin}
          userName={this.state.userName}
          message={this.state.message}
        />
        <div className="content-wrap">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Header/>
        <div className="content-wrap">
          content
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Link} from 'react-router';

class Logo extends Component {
  render() {

    if(window.outerwidth < 600){
      console.log("YES")
    }

    return (
      <div className="logo">
        <Link to={ sessionStorage.getItem('useremail') ? "/main" : "/" }>
          <div className="logo-img"></div>
        </Link>
      </div>
    );
  }
}

export default Logo;

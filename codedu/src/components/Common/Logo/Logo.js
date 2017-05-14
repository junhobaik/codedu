import React, { Component } from 'react';
import logo from '../../../image/bg_bright_codedu.png';
import {Link} from 'react-router';

class Logo extends Component {
  render() {

    return (
      <div className="logo">
        <Link to={ sessionStorage.getItem('useremail') ? "/main" : "/" }>
          <img src={logo} alt='logo'/>
        </Link>
      </div>
    );
  }
}

export default Logo;

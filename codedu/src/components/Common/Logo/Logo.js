import React, { Component } from 'react';
import logo from '../../../image/bg_bright_codedu.png';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <a href="/"><img src={logo}/></a>
      </div>
    );
  }
}

export default Logo;

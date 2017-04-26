import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';

class LoginButton extends Component {
  render() {
    return (
        <div className="login">
          <Button>로그인</Button>
        </div>
    );
  }
}

export default LoginButton;
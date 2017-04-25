import React, { Component } from 'react';
import { Button, Modal} from 'semantic-ui-react';

class LoginButton extends Component {
  render() {
    return (
        <Modal trigger={<Button className="login">Login</Button>}>
          <Modal.Content>
            <p>Login Modal</p>
          </Modal.Content>
        </Modal>
    );
  }
}

export default LoginButton;
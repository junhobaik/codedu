import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import 'whatwg-fetch';

class LoginButton extends Component {

  
  
  render() {

    const {onClick, message} = this.props;

    return (
        <Modal size='small' trigger={<Button className="login">Login</Button>}>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>E-Mail</label>
                <input type='email' name='email' placeholder='E-Mail' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type='password' name='password' placeholder='Password' />
              </Form.Field>
              <Button type='submit' onClick={onClick}>Go</Button>
            </Form>
            <div>{message}</div>
          </Modal.Content>
        </Modal>
    );
  }
}

export default LoginButton;

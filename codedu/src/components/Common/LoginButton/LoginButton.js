import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';

class LoginButton extends Component {
  render() {
    return (
        <Modal size='small' trigger={<Button className="login">Login</Button>}>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>E-Mail</label>
                <input type='email' placeholder='E-Mail' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input type='password' placeholder='Password' />
              </Form.Field>
              <Button type='submit'>Go</Button>
            </Form>
          </Modal.Content>
        </Modal>
    );
  }
}

export default LoginButton;

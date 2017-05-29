import React, { Component } from 'react';
import { Button, Modal, Form, Icon } from 'semantic-ui-react';
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
                <Form.Input type='email' iconPosition='left' name='email' placeholder='이메일 주소' >
                    <Icon name='at'/>
                    <input/>
                </Form.Input>
              </Form.Field>

              <Form.Field>
                <label>Password</label>
                <Form.Input type='password' iconPosition='left' name='password' placeholder='비밀번호' >
                    <Icon name="lock"/>
                    <input/>
                </Form.Input>
              </Form.Field>
              <div className="login-message">{message}</div>
              <Button type='submit' onClick={onClick}>Go</Button>
            </Form>

          </Modal.Content>
        </Modal>
    );
  }
}

export default LoginButton;

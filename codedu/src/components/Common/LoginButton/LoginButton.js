import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import 'whatwg-fetch';

class LoginButton extends Component {
  constructor() {
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
    })
    .catch((error) => {
      console.log('Error Fetch', error);
    })
  }

  render() {
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
              <Button type='submit' onClick={this.login}>Go</Button>
            </Form>
          </Modal.Content>
        </Modal>
    );
  }
}

export default LoginButton;

import React, { Component } from 'react';
import {browserHistory} from 'react-router';

import { Button, Form, Input, Message, Icon } from 'semantic-ui-react'

class Join extends Component {
    constructor(props) {
        super();
        this.state = {
            isLogin: false,
            message: null,
            userName: null
        }
    }

    join = (evt) => {
        evt.preventDefault();
        const form = evt.target.parentElement;
        fetch('/api/join', {
                method: 'POST',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: form[0].value,
                    password: form[1].value,
                    vpassword: form[2].value,
                })
            })
            .then((response) => {
                console.log("response", response);
                if (response.redirected === true) {
                    const path = response.url.split('/')[3];
                    console.log("local-join Strategy success, move to /", path);
                    browserHistory.push(path);
                } else {
                    return response.json();
                }
                return response.json();
            })
            .then((responseData) => {
                console.log("responseData",responseData);
                this.setState({
                    message: responseData.message
                });
            })
            .catch((error) => {
                //console.log('Error Fetch', error);
            })
    }
    render() {
        return (
            <div className="join-wrap">
                <div className="join-intro">
                    &lt;Code&gt;du 와 함께 <br/>
                    학습하시려면 가입해주세요.
                </div>
                <hr/>
                <Form action='/api/join' method='post'>
                    <Form.Input name='email' iconPosition='left' label='Email' placeholder='이메일 주소' >
                        <Icon name='at'/>
                        <input/>
                    </Form.Input>
                    <Form.Input name='password' iconPosition='left' label="Password" name="password" type="password" placeholder='비밀번호'>
                        <Icon name='lock'/>
                        <input/>
                    </Form.Input>
                    <Form.Input name='passwordVertify' iconPosition='left' label="Vertify password" type="password" placeholder='비밀번호 확인'>
                        <Icon name='lock'/>
                        <input/>
                    </Form.Input>
                    {/*<Button onClick={this.join} className='submit' fluid type='submit'>가입하기</Button>*/}
                    <Button onClick={this.join} className='submit' fluid >가입하기</Button>
                </Form>
                <div className='messege'>{this.state.message}</div>
            </div>
        );
    }
}

export default Join;

import React, { Component, PropTypes } from 'react';

import { Button, Form, Input, Message, Icon } from 'semantic-ui-react'

class Join extends Component {
    render() {
        return (
            <div className="join-wrap">
                <div className="join-intro">
                    &lt;Code&gt;du 와 함께 <br/>
                    학습하시려면 가입해주세요.
                </div>
                <hr/>
                <Form>
                    <Form.Input iconPosition='left' label='Email' placeholder='이메일 주소' >
                        <Icon name='at'/>
                        <input/>
                    </Form.Input>
                    <Form.Input iconPosition='left' label="Password" name="password" type="password" placeholder='비밀번호'>
                        <Icon name='lock'/>
                        <input/>
                    </Form.Input>
                    <Form.Input iconPosition='left' label="Vertify password" name="password" type="password" placeholder='비밀번호 확인'>
                        <Icon name='lock'/>
                        <input/>
                    </Form.Input>
                    <Button className='submit' fluid type='submit'>가입하기</Button>
                </Form>
            </div>
        );
    }
}

Join.propTypes = {

};

export default Join;

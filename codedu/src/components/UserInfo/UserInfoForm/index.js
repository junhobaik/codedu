
import React, { Component, PropTypes } from 'react';
import { Form } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import imgCastle from '../../../image/castle.png'
import imgDesert from '../../../image/desert.png'
import imgIceberg from '../../../image/iceberg.png'
import imgMountains from '../../../image/mountains.png'
import imgVillage from '../../../image/village.png'
import imgWaterfall from '../../../image/waterfall.png'

const options = [
    { key: 'icon01', text: 'castle', value: 'castle'},
    { key: 'icon02', text: 'desert', value: 'desert'},
    { key: 'icon03', text: 'iceberg', value: 'iceberg'},
    { key: 'icon04', text: 'mountains', value: 'mountains'},
    { key: 'icon05', text: 'village', value: 'village'},
    { key: 'icon06', text: 'waterfall', value: 'waterfall'}
]

class UserInfoForm extends Component {
    state = {}

    toggleClass = (target, a, b) => {
        target.className = target.className.replace(a, b)
    }
    
    handleChange = (e, { value }) => this.setState({ value })

    handleClick = (e) => {

        // toggleClass and set form input icon value
        if(e.target.classList.contains('radio-off')) {

            this.toggleClass(e.target, 'radio-off', 'radio-on')
            let siblings = e.target.parentElement.children;

            for(let i=1; i<siblings.length; i++) {

                if(siblings[i] === e.target) {
                    let inputIcon = document.querySelector('input[name=icon]')
                    inputIcon.value = e.target.classList[0]
                }
                
                if(siblings[i].classList.contains('radio-on') && (siblings[i] !== e.target)) {
                    this.toggleClass(siblings[i], 'radio-on', 'radio-off');
                }

            }
        }
    }
    
    render() {
        const { value } = this.state

        return (
            <Form className='user-info-form' action='/api/userinfo' method='post'>
                <Form.Group widths='equal'>
                    <Form.Input name='email' label='E-mail' placeholder='codedu@codedu.com' value='' disabled/>
                    <Form.Input name='password' label='Password' placeholder='Password' value=''/>
                    <Form.Input name='passwordConfirm'label='Password (confirm)' placeholder='Password' value=''/>
                    <Form.Input name='newPassword'label='New Password' placeholder='New Password' value=''/>
                    <Form.Input type='hidden' name='icon' value='castle'/>
                </Form.Group>
                <Form.Group inline className='user-icon'>
                    <label>User icon</label>
                    <img src={imgCastle} onClick={this.handleClick} className='castle radio-on'/>
                    <img src={imgDesert} onClick={this.handleClick} className='desert radio-off'/>
                    <img src={imgIceberg} onClick={this.handleClick} className='iceberg radio-off'/>
                    <img src={imgMountains} onClick={this.handleClick} className='mountains radio-off'/>
                    <img src={imgVillage} onClick={this.handleClick} className='village radio-off'/>
                    <img src={imgWaterfall} onClick={this.handleClick} className='waterfall radio-off'/>
                </Form.Group>
            </Form>
        );
    }
}

UserInfoForm.propTypes = {

};

export default UserInfoForm;

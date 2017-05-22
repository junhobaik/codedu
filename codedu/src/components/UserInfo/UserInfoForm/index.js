import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'
import imgCastle from '../../../image/castle.png'
import imgDesert from '../../../image/desert.png'
import imgIceberg from '../../../image/iceberg.png'
import imgMountains from '../../../image/mountains.png'
import imgVillage from '../../../image/village.png'
import imgWaterfall from '../../../image/waterfall.png'

class UserInfoForm extends Component {

    state = {
        email: sessionStorage.getItem('useremail'),
        password: '',
        newpassword: '',
        icon: sessionStorage.getItem('usericon'),
        validateMSG: ''
    }
    
    toggleClass = (target, a, b) => {
        target.className = target.className.replace(a, b)
    }

    handleChange = (e, { value }) => {
        this.setState({ value })
    }

    handleClick = (e) => {

        // toggleClass and set form input icon value
        if(e.target.classList.contains('radio-off')) {

            this.toggleClass(e.target, 'radio-off', 'radio-on')
            let siblings = e.target.parentElement.children;

            for(let i=1; i<siblings.length; i++) {

                if(siblings[i] === e.target) {
                    let inputIcon = document.querySelector('input[name=photo]')
                    inputIcon.value = e.target.classList[0]
                    sessionStorage.setItem('usericon', inputIcon.value)
                }
                
                if(siblings[i].classList.contains('radio-on') && (siblings[i] !== e.target)) {
                    this.toggleClass(siblings[i], 'radio-on', 'radio-off');
                }

            }
        }
    }
    
    validate = () => {

        let form = document.querySelectorAll('.input>input');
        let button = document.querySelector('.user-info-submit')

        let password = form[1].value
        let newPassword = form[2].value
        let newConfirm = form[3].value

        let lengths = [password.length, newPassword.length, newConfirm.length];

        let isNotEmpty = false;
        let isMatch = false;

        if(lengths.indexOf(0) === -1){
            isNotEmpty = true;
        } else {
            isNotEmpty = false;
        }
        
        if(newPassword === newConfirm) {
            isMatch = true;
        } else {
            isMatch = false;
        }

        let msg = ''

        if(isNotEmpty && isMatch) {
            // enable submit button
            this.setState({ 
                validateMSG : ''
            })
            button.disabled = false
            button.classList.remove('disabled')
        } else {
            let msg = '';
            if (!isNotEmpty) {
                this.setState({ 
                    validateMSG : '(모든 항목에 내용을 입력해주세요.)'
                })
            } else if (!isMatch) {
                this.setState({ 
                    validateMSG : '(비밀번호와 비밀번호 확인이 일치하지 않습니다..)'
                })
            } 
            // disable submit button
            button.disabled = true
            button.classList.add('disabled')
        }

    }

    componentWillMount() {
        if(!this.state.email) {
            this.setState({email: 'test@test.com'})
        }
        if(!this.state.icon) {
            this.setState({icon: 'castle'})
        }
    }

    render() {

        let imageArr = [imgCastle, imgDesert, imgIceberg, imgMountains, imgVillage, imgWaterfall]
        let filenameArr = ['castle', 'desert', 'iceberg', 'mountains', 'village', 'waterfall']

        let imageItems = imageArr.map((img, index)=> {
            if(sessionStorage.getItem('usericon') === filenameArr[index]) {
                return <img 
                    key={index} src={img} alt={filenameArr[index]} 
                    onClick={this.handleClick} 
                    className={filenameArr[index]+' '+'radio-on'} />
            } else {
                return <img 
                    key={index} src={img} alt={filenameArr[index]} 
                    onClick={this.handleClick} 
                    className={filenameArr[index]+' '+'radio-off'} />
            }
        })

        return (
            <Form className='user-info-form' action='/api/userinfo' method='post'>
                <p>{ this.state.validateMSG }</p>
                <Form.Group widths='equal'>
                    <Form.Input type='text' name='email' label='E-mail' placeholder='codedu@codedu.com' value={ this.state.email } disabled/>
                    <Form.Input type='password' name='password' label='Password' placeholder='Password' onChange={ this.validate }/>
                    <Form.Input type='password' name='newPassword'label='New Password' placeholder='New Password' onChange={ this.validate }/>
                    <Form.Input type='password' name='newConfirm'label='New Password (confirm)' placeholder='New Password (confirm)' onChange={ this.validate }/>
                    <Form.Input type='hidden' name='photo' value={ this.state.icon }/>
                </Form.Group>
                <Form.Group inline className='user-icon'>
                    <label>User icon</label>
                    {imageItems}
                </Form.Group>
            </Form>
        );
    }
}

export default UserInfoForm;

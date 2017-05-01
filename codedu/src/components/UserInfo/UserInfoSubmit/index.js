
import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'

class UserInfoSubmit extends Component {

    state = {
        disabledClass: 'disabled',
        responseMessage: ''
    }

    update = (e) => {
        e.preventDefault()
        const form = document.querySelector('.user-info-form')

        console.log(form)
        
        fetch('/api/userinfo', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: form[0].value,
                password: form[1].value,
                newPassword: form[3].value,
                photo: form[4].value
            })
        })
        .then((response) => {
            console.log('responseData', response)
            this.setState({responseMessage: response})
        })
        .catch((error) => {
            console.log(error)
        })
    }
    render() {

        return (
            <Button onClick={this.update} className='disabled user-info-submit'>적용</Button>
        );
    }
}

UserInfoSubmit.propTypes = {

};

export default UserInfoSubmit;


import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'

class UserInfoSubmit extends Component {


    render() {
        return (
            <Button className='user-info-submit' disabled>적용</Button>
        );
    }
}

UserInfoSubmit.propTypes = {

};

export default UserInfoSubmit;

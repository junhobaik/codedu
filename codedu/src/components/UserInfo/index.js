import React, { Component, PropTypes } from 'react';
import UserInfoForm from './UserInfoForm';
import UserInfoSubmit from './UserInfoSubmit';

class UserInfo extends Component {
    render() {
        return (
            <div>
                <h3>설정 > 회원정보수정</h3>
                <UserInfoSubmit/>
                <UserInfoForm/>
            </div>
        );
    }
}

UserInfo.propTypes = {

};

export default UserInfo;
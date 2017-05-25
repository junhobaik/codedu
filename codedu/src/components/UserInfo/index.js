import React, { Component } from 'react';
import UserInfoForm from './UserInfoForm';
import UserInfoSubmit from './UserInfoSubmit';
import './index.css';

class UserInfo extends Component {

    render() {

        return (
            <div className="user-info-outter-wrap">
                <div className="sapce"></div>
                    <div className='user-info-wrap'>
                        <div>
                            <h3>설정 > 회원정보수정</h3>
                            <UserInfoSubmit />
                        </div>
                        <p></p>
                        <UserInfoForm />
                    </div>
                <div className="sapce"></div>
            </div>
        );
    }
}

export default UserInfo;

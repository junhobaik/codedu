import React, { Component } from 'react';
import { Dropdown, Image } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import * as profileImages from '../../../image/index';

class User extends Component {

  linkSetting = () => {
		browserHistory.push('/user');
    }

  render() {

    const {onClick, userName, userPhoto} = this.props;

    const trigger = (
        <span>
            {userName} <Image avatar src={profileImages[userPhoto]} />
        </span>
    );

    return (
        <div className="user">
            <Dropdown trigger={trigger} pointing='top right' icon={null}>
                <Dropdown.Menu>
                    <Dropdown.Item key='settings' text='회원정보수정' icon='settings' onClick={this.linkSetting} />
                    <Dropdown.Item key='sign-out' text='로그아웃' icon='sign out' onClick={onClick} />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
  }
}

export default User;

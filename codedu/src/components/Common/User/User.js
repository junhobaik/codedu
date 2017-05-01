import React, { Component } from 'react';

import faker from 'faker';
import { Dropdown, Image } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import castle from '../../../image/castle.png';
import desert from '../../../image/desert.png';
import iceberg from '../../../image/iceberg.png';
import mountains from '../../../image/mountains.png';
import village from '../../../image/village.png';
import waterfall from '../../../image/waterfall.png';


class User extends Component {

  linkSetting = () => {
		browserHistory.push('/user');
    }

  render() {

    const {onClick, userName, userPhoto} = this.props;

    const profileImages = {
        "castle": castle, 
        "desert": desert,
        "iceberg": iceberg,
        "mountains": mountains,
        "village": village,
        "waterfall": waterfall
    };

    const trigger = (
        <span>
            {userName} <Image avatar src={profileImages[userPhoto]} />
        </span>
    );

    const options = [
        { key: 'settings', text: '회원정보수정', icon: 'settings' },
        { key: 'sign-out', text: '로그아웃', icon: 'sign out' },
    ];

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

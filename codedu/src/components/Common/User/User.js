import React, { Component } from 'react';

import faker from 'faker';
import { Dropdown, Image } from 'semantic-ui-react';
import { browserHistory } from 'react-router';


class User extends Component {

  linkSetting = () => {
		browserHistory.push('/user');
	}

  render() {

      const {userName} = this.props;

    const trigger = (
        <span>
            {userName} <Image avatar src={faker.internet.avatar()} />
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
                    <Dropdown.Item key='sign-out' text='로그아웃' icon='sign out' />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
  }
}

export default User;

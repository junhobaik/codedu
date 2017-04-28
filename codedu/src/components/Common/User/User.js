import React, { Component } from 'react';

import faker from 'faker';
import { Dropdown, Image } from 'semantic-ui-react';


class User extends Component {
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
            <Dropdown trigger={trigger} options={options} pointing='top right' icon={null} />
        </div>
    );
  }
}

export default User;

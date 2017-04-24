import React, { Component } from 'react';

import faker from 'faker';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, Image } from 'semantic-ui-react';


class User extends Component {
  render() {
    const trigger = (
        <span>
            {faker.name.findName()} <Image avatar src={faker.internet.avatar()} />
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
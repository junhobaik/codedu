import React, { Component } from 'react';

class UserExp extends Component {
    render() {
        return (
            <h3 className='user-level'>Lv. { this.props.level }</h3>
        );
    }
}

export default UserExp;

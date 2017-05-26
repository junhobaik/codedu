import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react'

class UserExp extends Component {
    render() {
        return (
            <Progress className='user-exp-bar' percent={ this.props.exp % 100 } warning/>
        );
    }
}

export default UserExp;

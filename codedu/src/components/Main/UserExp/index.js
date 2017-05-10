import React, { Component, PropTypes } from 'react';
import { Progress } from 'semantic-ui-react'

class UserExp extends Component {
    render() {
        return (
            <Progress className='user-exp-bar' percent={ this.props.exp % 100 } warning/>
        );
    }
}

UserExp.propTypes = {

};

export default UserExp;

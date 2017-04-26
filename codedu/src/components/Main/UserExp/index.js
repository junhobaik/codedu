import React, { Component, PropTypes } from 'react';
import { Progress } from 'semantic-ui-react'

class UserExp extends Component {
    render() {
        return (
            <Progress className='user-exp-bar' percent={20} warning/>
        );
    }
}

UserExp.propTypes = {

};

export default UserExp;

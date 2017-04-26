import React, { Component, PropTypes } from 'react';
import { Progress } from 'semantic-ui-react';
import Quiz from '../Quiz'


const options = [
    { key: '01', text: 'basic01', value: 'basic01'},
    { key: '02', text: 'basic02', value: 'basic02'},
    { key: '03', text: 'basic03', value: 'basic03'}
]

class UserExp extends Component {
    
    state = { 
        partTitle: 'THE basic of basics'
    };

    render() {
        const listItems = options.map((option) =>
            <Quiz/>
        );
        return (
            <div>
                <h2>{this.state.partTitle}</h2>
                <div>{listItems}</div>
            </div>
        );
    }
}

UserExp.propTypes = {

};

export default UserExp;

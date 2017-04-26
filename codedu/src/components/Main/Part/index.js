import React, { Component, PropTypes } from 'react';
import { Progress, Button, Divider } from 'semantic-ui-react';
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
            <Button.Group widths='3'>
                <Quiz className='quiz-button'/>
            </Button.Group>
        );
        return (
            <div>
                <h2>{this.state.partTitle}</h2>
                <div className='part-item-list'>{listItems}</div>
                <Divider/>
            </div>
        );
    }
}

UserExp.propTypes = {

};

export default UserExp;

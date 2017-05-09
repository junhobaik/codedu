import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react'; 

const options = [
    { key: '01', text: 'basic01', value: 'basic01'},
    { key: '02', text: 'basic02', value: 'basic02'},
    { key: '03', text: 'basic03', value: 'basic03'}
]

class Quiz extends Component {
    render() {
        console.log("quiz is",this.props.quiz)
        return (
            <Button key={options.key}>{this.props.quiz.quiz_title}</Button>
        );
    }
}

Quiz.propTypes = {

};

export default Quiz;

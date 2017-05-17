import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'; 

const tests = [
    { key: '01', text: 'test01', value: 'test01'},
    { key: '02', text: 'test02', value: 'test02'},
    { key: '03', text: 'test03', value: 'test03'}
]

class Test extends Component {
    render() {
        return (
            <Button
                color='blue' key={tests.key}
                className={this.props.progress? 'test-button quiz-done' : 'test-button quiz-not-done'}>
                TEST
            </Button>
        );
    }
}

export default Test;
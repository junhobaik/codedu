import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'; 
import {Link} from 'react-router';

const tests = [
    { key: '01', text: 'test01', value: 'test01'},
    { key: '02', text: 'test02', value: 'test02'},
    { key: '03', text: 'test03', value: 'test03'}
]

class Test extends Component {
    render() {
        return (
            <div className="test-button">
                <Link to={"/study/"+this.props.title+"&parttest"}>
                    <Button
                        key={tests.key}
                        className={this.props.progress !== null ? 'test-button quiz-done' : 'test-button quiz-not-done'}>
                        TEST
                    </Button>
                </Link>
            </div>
        );
    }
}

export default Test;
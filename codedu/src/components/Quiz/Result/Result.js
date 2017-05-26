import React, { Component } from 'react';

import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Result extends Component {
    render() {

        const {next, correct, number, setScore, problemLength} = this.props;

        const x = { 
            text: <div> <Icon name='remove' size='big' /> <div className="text">"오답" 입니다.</div> </div>,
            style: { backgroundColor : '#FF1912' }
        };
        const o = { 
            text: <div> <Icon name='radio' size='big' /> <div className="text">"정답" 입니다.</div> </div>,
            style: { backgroundColor : '#B5CC51' }
        };
        let result = correct ? o : x;

        return (
            <div className='result-wrap' style={result.style}>
                {result.text}
                {(number < problemLength-1) ? <Button floated='right' onClick={next}>다음</Button> : <Button floated='right' onClick={setScore}>끝내기</Button>}
            </div>
        );
    }
}

export default Result;

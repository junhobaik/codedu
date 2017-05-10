import React, { Component } from 'react';

import { Button, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Result extends Component {
    render() {
        const x = { 
            text: <div> <Icon name='remove' size='big' /> <div className="text">"오답" 입니다.</div> </div>,
            style: { backgroundColor : '#FF1912' }
        };
        const o = { 
            text: <div> <Icon name='radio' size='big' /> <div className="text">"정답" 입니다.</div> </div>,
            style: { backgroundColor : '#B5CC51' }
        };
        let result = o;
        return (
            <div className='result-wrap' style={result.style}>
                {result.text}
                <Button floated='right'>다음</Button>
            </div>
        );
    }
}

export default Result;

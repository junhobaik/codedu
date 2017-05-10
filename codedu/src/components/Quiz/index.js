import React, { Component } from 'react';
import './Quiz.css';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';

import ProgressBar from './ProgressBar/ProgressBar';
import Content from './Content/Content';
import Result from './Result/Result';



class Quiz extends Component {
    render() {
        const pageTitle = "PART 1 > BASIC";
        return (
            <div className='quiz-wrap'>
                <div className='space'></div>
                <div className='outter-wrap'>
                    <div className='inner-wrap'>
                        <div className='top'>
                            <h2>{pageTitle}</h2>
                            <Link to="main"><Button floated='right'>나가기</Button></Link>
                        </div>
                        <ProgressBar/>
                        <Content/>
                        <Result/>
                    </div>
                </div>
                <div className='space'></div>
            </div>
        );
    }
}

export default Quiz;

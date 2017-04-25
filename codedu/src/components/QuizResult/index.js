import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import './result.css';
import Experience from './Experience/Experience';
import Message from './Message/Message';
class QuizResult extends Component {
    render() {
        const rightAnswer = 3;
        const totalAnswer = 10;
        const userLevel = 5;
        const userExp = 30;
        const gainExp = 10;
        const totalExp = userExp + gainExp;

        return (
            <div className="result-wrap">
                <div className="result-header">
                    <span className="mile">
                        PART1 > BASIC
                    </span>
                    <a href="/"><Button floated="right" className="result-button-out">나가기</Button></a>
                </div>
                <div className="result-content">
                    <Experience 
                        userLevel={userLevel}
                        totalExp={totalExp}
                        gainExp={gainExp}
                    />
                    <Message 
                        rightAnswer={rightAnswer}
                        totalAnswer={totalAnswer}
                    />
                </div>
            </div>
        );
    }
}

QuizResult.propTypes = {

};

export default QuizResult;
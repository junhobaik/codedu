import React, { Component, PropTypes } from 'react';
import { Button, Progress } from 'semantic-ui-react';
import './result.css';

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
                    <div className="result-exp">
                        <div className="result-level">
                            Lv. {userLevel}
                        </div>
                        <Progress percent={totalExp} style={{margin: 0}}/>
                        <div className="result-up">
                            + {gainExp}%
                        </div>
                    </div>

                    <div className="result-message">
                        <p>정답 : {rightAnswer} / {totalAnswer}</p>

                        <p>다시 공부하세요</p>
                    </div>
                </div>
            </div>
        );
    }
}

QuizResult.propTypes = {

};

export default QuizResult;
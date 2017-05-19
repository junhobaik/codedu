import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './result.css';
import Experience from './Experience/Experience';
import Message from './Message/Message';

import { connect } from 'react-redux';

class QuizResult extends Component {

    constructor(props) {
        super(props)
        this.state = {
            exp: 0
        }
    }

    transResult = () => {

        const score = this.props.data.score;

        fetch('/api/result', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: sessionStorage.getItem('useremail'),
                score: score
            })
        })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((responseData) => {
            console.log("/api/result = ", responseData);
            this.setState({
                exp: responseData.exp
            });
        })
        .catch((error) => {
            console.log('Error Fetch', error)
        })
    }

    componentDidMount() {
        this.transResult();
    }

    render() {
        const {data} = this.props;
        console.log("result page data : ", data);

        const rightAnswer = data.score;
        const totalAnswer = 10;
        const userLevel = Math.floor(this.state.exp / 100) + 1;
        const getExp = 5;
        const userExp = this.state.exp;
        const gainExp = getExp * rightAnswer;

        return (
            <div className="result-wrap">
                <div className="result-header">
                    <span className="mile">
                        PART1 > BASIC
                    </span>
                    <a href="/main"><Button floated="right" className="result-button-out">나가기</Button></a>
                </div>
                <div className="result-content">
                    <Experience 
                        userLevel={userLevel}
                        totalExp={userExp}
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

const mapStateToProps = (state) => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(QuizResult);
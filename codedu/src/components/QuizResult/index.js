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
            level: 1,
            exp: 0
        }
    }

    initValues = () => {
        fetch('/api/userstats', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "latilt2@gmail.com"
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((responseData) => {
            console.log("initvalues", responseData);
            this.setState({
                level: responseData.level,
                exp: responseData.exp,
            })
        })
        .catch((error) => {
            console.log('Error Fetch', error)
        })
    }

    setResult = () => {
        const totalExp = this.props.data.score * 5 + this.state.exp;
        console.log("set Result ", totalExp);
        
        fetch('/api/result', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: "latilt2@gmail.com",
                gainExp: totalExp
            })
        })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((responseData) => {
            console.log(responseData);
        })
        .catch((error) => {
            console.log("fetch error ", error);
        })
    }

    componentDidMount() {
        this.initValues();
        this.setResult();
    }

    render() {
        const {data} = this.props;
        console.log("result page data : ", data);

        const rightAnswer = data.score;
        const totalAnswer = 10;
        const userLevel = this.state.level;
        const getExp = 5;
        const userExp = this.state.exp;
        const gainExp = getExp * rightAnswer;
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

const mapStateToProps = (state) => {
    return {
        data: state
    }
}
export default connect(mapStateToProps)(QuizResult);
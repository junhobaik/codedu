import React, { Component } from 'react';
import './Quiz.css';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';

import ProgressBar from './ProgressBar/ProgressBar';
import Content from './Content/Content';
import Result from './Result/Result';
import {browserHistory} from 'react-router';

import { connect } from 'react-redux';

class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            problem : null,
            problemLength: 0,
            correct: false,
            result: false,
            score: 0,
            onClickDisable: false
        }
    }

    fetchProblem = () => {
        fetch('/api'+window.location.pathname+window.location.search,
        {
            method: "GET",
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials : 'same-origin',
        }
        )
        .then((response) => {
            console.log('fetchProblem response is', response);
            return response.json();
        })
        .then((responseData) => {
            console.log('fetchProblem responseData is',responseData);
            this.setState({problem: responseData, problemLength: responseData.length});
        })
        .catch((error) => {
            console.log("Fetch Error", error);
        })
    }

    next = () => {
        const liList = document.querySelectorAll(".quiz-wrap .content-wrap ul li")
        for(let i = 0; i < liList.length; i++){
            liList[i].style.backgroundColor = "#d8d8d8";
        }
        this.setState(function(state, props) {
            return {
                number: state.number+1,
                result: false,
                onClickDisable: false
            }
        });
    }

    checkAnswer = (AnswerNumber) => {
        console.log(document.querySelectorAll(".quiz-wrap .content-wrap ul li")[AnswerNumber]);
        const liList = document.querySelectorAll(".quiz-wrap .content-wrap ul li")
        for(let i = 0; i < liList.length; i++){
            if(i !== AnswerNumber){
                liList[i].style.backgroundColor = "#d8d8d8";
            }else{
                liList[i].style.backgroundColor = "rgb(32,196,145)";
            }
        }
        const currentNumber = this.state.number;
        const currentAnswer = this.state.problem[currentNumber].answer - 1;

        if(AnswerNumber !== currentAnswer) {
            this.setState(function(state, props) {
                return {
                    result: true,
                    correct: false,
                    score: state.score,
                    onClickDisable: true
                }
            });
        } else {
            this.setState(function(state, props) {
                return {
                    result: true,
                    correct: true,
                    score: state.score + 1,
                    onClickDisable: true
                }
            })
        }
    }

    exit = () => {
        if (confirm("정말 나가시겠습니까? 나가시면 현재 진행상황이 사라집니다")) browserHistory.push('/main');
    }

    componentDidMount() {
        this.fetchProblem();
    }

    componentWillUnmount() {
        this.props.setLength(this.state.problemLength);
    }



    render() {
        console.log("part_title is",localStorage.getItem('part_title'));
        const partTitle = localStorage.getItem('part_title');
        const quizTitle = localStorage.getItem('quiz_title');
        const pageTitle = partTitle + " > " + quizTitle;
        let {number, problem, problemLength, result, correct, onClickDisable} = this.state;
        let {data, setScore} = this.props;
        
        return (
            <div className='quiz-wrap'>
                <div className='space'></div>
                <div className='outter-wrap'>
                    <div className='inner-wrap'>
                        <div className='top'>
                            <h2>{pageTitle}</h2>
                            <Button onClick={this.exit}>나가기</Button>
                        </div>
                        <ProgressBar number={number} problemLength={problemLength}/>
                        <Content number={number} problem={problem} onClickDisable={onClickDisable} checkAnswer={this.checkAnswer} />
                        {result
                            ? <Result problemLength={problemLength} next={this.next} correct={correct} number={number} setScore={setScore.bind(this)} />
                            : <div className='result-wrap'></div>}
                    </div>
                </div>
                <div className='space'></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    data: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setScore() {
        console.log(this.state.score);
      dispatch({
        type: "QUIZ_SETSCORE",
        value: this.state.score
      });
      browserHistory.push('/result');
    },

    setLength(length) {
        console.log("problems length = ", length);
        dispatch({
            type: "QUIZ_SETLENGTH",
            value: length
        });
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);

import React, { Component, PropTypes } from 'react';
import './Quiz.css';

import { Button } from 'semantic-ui-react';
import { Link } from 'react-router';

import ProgressBar from './ProgressBar/ProgressBar';
import Content from './Content/Content';
import Result from './Result/Result';



class Quiz extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number : 0,
            problem : null,
            result: false
        }
    }

    fetchProblem = () => {

        const Params = "Variable";
        fetch('/api/quiz?quiz='+Params, 
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
            console.log(response);
            return response.json();
        })
        .then((responseData) => {
            console.log(responseData);
            this.setState({problem: responseData});
        })
        .catch((error) => {
            console.log("Fetch Error", error);
        })
    }

    next = () => {
        this.setState(function(state, props) {
            return {
                number: state.number+1
            }
        });
    }

    componentDidMount() {
        this.fetchProblem();
    }


    render() {
        const pageTitle = "PART 1 > BASIC";
        let {number, problem} = this.state;
        
        return (
            <div className='quiz-wrap'>
                <div className='space'></div>
                <div className='outter-wrap'>
                    <div className='inner-wrap'>
                        <div className='top'>
                            <h2>{pageTitle}</h2>
                            <Link to="main"><Button floated='right'>나가기</Button></Link>
                        </div>
                        <ProgressBar number={number} />
                        <Content number={number} problem={problem} />
                        {this.state.result ? <Result next={this.next} /> : <div></div>}
                    </div>
                </div>
                <div className='space'></div>
            </div>
        );
    }
}

Quiz.propTypes = {

};

export default Quiz;

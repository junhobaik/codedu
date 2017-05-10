import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'; 
import {Link} from 'react-router';


class Quiz extends Component {
    render() {
        console.log("Quiz title is",this.props.title);
        console.log("Quiz quiz is",this.props.quiz);
        
        return (
            <div className="quiz-button">
                <Link to={"/study/"+this.props.title+"&"+this.props.quiz.quiz_title}><Button>{this.props.quiz.quiz_title}</Button></Link>
            </div>
        );
    }
}

export default Quiz;

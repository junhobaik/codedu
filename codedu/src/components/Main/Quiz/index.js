import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'; 
import {Link} from 'react-router';


class Quiz extends Component {
    state = {
        is_quiz_done: false
    }

    componentWillMount() {
        const progress = this.props.progress
        const quiz_title = this.props.quiz.quiz_title
       
        if (progress !== null && progress.quiz_title.indexOf(quiz_title) !== -1) {
            this.setState({
                is_quiz_done: true
            })
        } else {
            this.setState({
                is_quiz_done: false
            })
        }
    }

    render() {
        console.log(this.props.quiz.quiz_title,"is_quiz_done is", this.state.is_quiz_done);
        return (
            <div className="quiz-button">
                <Link to={"/study/"+this.props.title+"&"+this.props.quiz.quiz_title}>
                    <Button className={this.state.is_quiz_done ? 'quiz-done' : 'quiz-not-done'}>{this.props.quiz.quiz_title}</Button>
                </Link>
            </div>
        );
    }
}

export default Quiz;

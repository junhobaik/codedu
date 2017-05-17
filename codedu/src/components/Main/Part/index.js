import React, { Component } from 'react';
import { Button, Divider } from 'semantic-ui-react';
import Quiz from '../Quiz'



class UserExp extends Component {
    
    render() {
        const quiz = this.props.quiz;
        
        console.log("Part title is", this.props.title)
        console.log("Part quiz is",quiz)
        //const progress = this.props.progress.quiz_title
        const progress = this.props.progress
        console.log("Part progress is",progress);
        
        const listItems = quiz.map((v) =>
            <Button.Group widths='3'>
                <Quiz title={this.props.title} quiz={v} progress={progress} className='quiz-button'/>
            </Button.Group>
        );
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div className='part-item-list'>{listItems}</div>
                <Divider/>
            </div>
        );
    }
}

export default UserExp;

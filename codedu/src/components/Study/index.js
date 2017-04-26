import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import './study.css';

class StudyMaterial extends Component {
    render() {
        return (
            <div className="study-wrap">
                <div className="study-header">
                    <span className="mile">
                        PART1 > BASIC
                    </span>
                    <Button floated='right' className="study-start-button top">시작</Button>
                </div>
                <div className="study-content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates pariatur nisi facilis ullam expedita, in dolor tempore ab cumque amet culpa adipisci sunt dolorem dolorum optio ipsum cupiditate magnam quidem.
                </div>
                <Button fluid className="study-start-button bottom">시작</Button>
            </div>
        );
    }
}

StudyMaterial.propTypes = {

};

export default StudyMaterial;
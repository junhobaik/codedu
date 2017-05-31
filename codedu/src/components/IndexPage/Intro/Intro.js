import faker from 'faker';
import React, { Component } from 'react';
import introduce from '../../../image/introduce.png';

class Intro extends Component {
    render() {
        return (
            <div className="intro-wrap">
                <div className="space"></div>
                <img src={introduce} alt="intro-img"/>
                <div className="space"></div>
            </div>
        );
    }
}

export default Intro;

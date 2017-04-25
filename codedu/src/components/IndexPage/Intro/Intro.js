import faker from 'faker';
import React, { Component, PropTypes } from 'react';

class Intro extends Component {
    render() {
        return (
            <div className="intro-wrap">
                <div className="space"></div>
                <img src={faker.image.imageUrl()} alt="intro-img"/>
                <div className="space"></div>
            </div>
        );
    }
}

Intro.propTypes = {

};

export default Intro;
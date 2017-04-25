import React, { Component, PropTypes } from 'react';
import './IndexPage.css';

import Intro from './Intro/Intro';
import Join from './Join/Join';

class IndexPage extends Component {
    render() {
        return (
            <div className="index-wrap">
                <div className="space">.</div>
                <div className="inner-wrap">
                    <Intro/>
                    <Join/>
                </div>
                <div className="space">.</div>
            </div>
        );
    }
}

IndexPage.propTypes = {

};

export default IndexPage;

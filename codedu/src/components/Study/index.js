import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import './study.css';
import ReactMarkdown from 'react-markdown';
import './markdown.css';

class StudyMaterial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            md : null
        }
    }
    getData = () => {
        fetch('/api'+window.location.pathname, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((responseData) => {
            console.log(responseData);
            this.setState({title: responseData.quiz_title})
        })
        .catch((error) => {
            console.log('fetch error', error);
        })
    }

    getMdData = () => {
        fetch('/subjects/quiz1.md', {
            method: "get",
            credentials: 'same-origin'
        })
        .then((response) => {
            console.log(response);
            return response.text();
        })
        .then((responseData) => {
            console.log(responseData);
            this.setState({md:responseData});
        })
        .catch((error) => {
            console.log('fetch error', error);
        })
    }

    componentDidMount() {
        this.getData();
        this.getMdData();
    }
    render() {

        const input = this.state.md;

        return (
            <div className="study-wrap">
                <div className="study-header">
                    <span className="mile">
                        PART1 > {this.state.title}
                    </span>
                    <Button floated='right' className="study-start-button top">시작</Button>
                </div>
                <div className="study-content">
                    <ReactMarkdown className="markdown" source={input} />
                </div>
                
                <Button fluid className="study-start-button bottom">시작</Button>
            </div>
        );
    }
}

StudyMaterial.propTypes = {

};

export default StudyMaterial;
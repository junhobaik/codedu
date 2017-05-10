import React, { Component, PropTypes } from 'react';
import { Button } from 'semantic-ui-react';
import './study.css';
import ReactMarkdown from 'react-markdown';
import './markdown.css';

class StudyMaterial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            part_title: null,
            quiz_title: null,
            content: null,
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
            console.log("study responseData is",responseData);
            this.setState({part_title: responseData[0].part_title, quiz_title: responseData[0].quiz[0].quiz_title, content: responseData[0].quiz[0].quiz_content})
        })
        .catch((error) => {
            console.log('fetch error', error);
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {

        return (
            <div className="study-wrap">
                <div className="study-header">
                    <span className="mile">
                        {this.state.part_title} > {this.state.quiz_title}
                    </span>
                    <Button floated='right' className="study-start-button top">시작</Button>
                </div>
                <ReactMarkdown className="markdown" source={this.state.content} />
                <Button fluid className="study-start-button bottom">시작</Button>
            </div>
        );
    }
}

StudyMaterial.propTypes = {

};

export default StudyMaterial;

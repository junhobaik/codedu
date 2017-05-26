import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './study.css';
import ReactMarkdown from 'react-markdown';
import './markdown.css';
import {Link} from 'react-router';

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
            const data = responseData[0];
            this.setState({
                part_title: data.part_title,
                quiz_title: data.quiz[0].quiz_title,
                content: data.quiz[0].quiz_content
            })
        })
        .catch((error) => {
            console.log('fetch error', error);
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const titleData = {
            part_title: this.state.part_title,
            quiz_title: this.state.quiz_title
        }
        localStorage.setItem('part_title', titleData.part_title);
        localStorage.setItem('quiz_title', titleData.quiz_title);
        
        return (
            <div className="study-wrap">
                <div className="study-header">
                    <span className="mile">
                        {this.state.part_title} > {this.state.quiz_title}
                    </span>
                    <Link to={"/quiz?quiz="+this.state.quiz_title}><Button className="study-start-button top">시작</Button></Link>
                </div>
                <div className="study-hr"><br/><hr/></div>
                <ReactMarkdown className="markdown" source={this.state.content} />
                <div className="study-start-button wrap">
                    <Link to={"/quiz?quiz="+this.state.quiz_title}><Button fluid className="study-start-button bottom">시작</Button></Link>
                </div>
            </div>
        );
    }
}

export default StudyMaterial;

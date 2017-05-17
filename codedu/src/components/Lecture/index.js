import React, { Component } from 'react';
import { Button, Input, TextArea, Form } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import MenuBorderless from './Menu';
import './Lecture.css';

class Lecture extends Component {

  constructor() {
    super();
    this.state = {
      lecture: false
    };
    this.structure = {
      lecture_title: "",
      part: []
    };
  }

  addLecture = (evt) => {
    const lecture_title = evt.target.previousSibling.value;
    if(!lecture_title.length) return;

    this.structure.lecture_title = lecture_title;
    this.structure.part = [];
    this.setState((state, props) => {
      return {
        lecture: true
      }
    });
  }
  editLecture = (evt) => {
    const lecture_title = evt.target.previousSibling.value;
    if(!lecture_title.length) return;

    this.structure.lecture_title = lecture_title;
  }

  addPart = (evt) => {
    const part_title = evt.target.previousSibling.value;
    if(!part_title.length) return;

    const objectData = {
      part_title: part_title,
      subject: []
    }
    this.structure.part.push(objectData);
    evt.target.previousSibling.value = "";
    this.forceUpdate();
  }
  editPart = (key, evt) => {
    const part_title = evt.target.previousSibling.value;
    if(!part_title.length) return;

    this.structure.part[key].part_title = part_title;
    this.forceUpdate();
  }

  addSubject = (key, evt) => {
    const subject_title = evt.target.previousSibling.value;
    if(!subject_title.length) return;

    const objectData = {
      subject_title: subject_title,
      subject_content: "",
      problems: []
    }
    this.structure.part[key].subject.push(objectData);
    evt.target.previousSibling.value = "";
    this.forceUpdate();
  }
  editSubject = (part_key, subject_key, evt) => {
    const subject_title = evt.target.previousSibling.value;
    if(!subject_title.length) return;

    this.structure.part[part_key].subject[subject_key].subject_title = subject_title;
    this.forceUpdate();
  }
  toggleContent = (evt) => {
    const target = evt.target.parentElement.nextSibling;
    const value = evt.target.innerText;

    if(value === "Content") {
      target.classList.remove("problems");
      target.classList.toggle("content");
    } else {
      target.classList.remove("content");
      target.classList.toggle("problems");
    }
    this.forceUpdate();
  }
  editContent = (part_key, subject_key, evt) => {
    const contentString = evt.target.value;

    this.structure.part[part_key].subject[subject_key].subject_content = contentString;
  }

  addProblems = () => {

  }


  render() {
    console.log("render ", this.structure);

    const { lecture } = this.state;

    const { part } = this.structure;
    let partArray;
    if(part.length) {
      partArray = part.map((part_value, part_index) => {
        
        /* subject render */
        let subjectArray;
        if(part_value.subject.length) {
          subjectArray = part_value.subject.map((subject_value, subject_index) => {
            return (
              <div className="subject" key={subject_value.subject_title}>
                <div className="subject-edit">
                  {/*<Input 
                    action={<div><Button onClick={this.editSubject.bind(this, part_index, subject_index)}>EDIT</Button>
                    <Button onClick={this.nextSubject.bind(this, part_value.part_title, subject_value.subject_title)}>NEXT</Button></div>}
                    placeholder="Add Subject"
                    defaultValue={subject_value.subject_title} 
                  />*/}
                  <div className="ui action input">
                    <input type="text" placeholder="Add Subject" defaultValue={subject_value.subject_title} />
                    <Button primary onClick={this.editSubject.bind(this, part_index, subject_index)}>EDIT</Button>
                    <Button secondary onClick={this.toggleContent}>Content</Button>
                    <Button onClick={this.toggleContent}>Problems</Button>
                  </div>
                  <div className="content-add">
                    <div className="subject-content-wrap">
                      <Form>
                        <TextArea onChange={this.editContent.bind(this, part_index, subject_index)} placeholder="Add Subject Content" />
                      </Form>
                    </div>
                    <div className="subject-problems-wrap">
                      {/*<Form>
                        <TextArea placeholder="Add Problems"/>
                      </Form>*/}
                      <MenuBorderless />
                    </div>
                  </div>
                  
                </div>
              </div>
            )
          });
        }

        /* part render */
        return (
          <div className="part" key={part_value.part_title}>
            <div className="part-edit">
              <Input 
                action={<Button onClick={this.editPart.bind(this, part_index)}>EDIT</Button>}
                placeholder="Add Part"
                defaultValue={part_value.part_title} 
              />
            </div>
            <div className="subject-wrap">
              {subjectArray}
              <div className="subject-add">
                <Input 
                  action={<Button onClick={this.addSubject.bind(this, part_index)}>ADD</Button>}
                  placeholder="Add subject"
                />
              </div>
            </div>
          </div>
        )
      });
    }

    return (
      <div className="main-wrap">
        <div className="lecture-wrap">
          <Input 
            action={lecture ? 
              <Button onClick={this.editLecture}>EDIT</Button> : 
              <Button onClick={this.addLecture}>ADD</Button>}
            placeholder="Add Lecture" 
          />
        </div>
        {lecture ?
          <div className="part-wrap">
            {partArray}
            <div className="part-add">
              <Input 
                action={<Button onClick={this.addPart}>ADD</Button>}
                placeholder="Add Part" 
              />
            </div>
          </div> :
          <div></div>
        }
      </div>
    )
  }
}

export default Lecture;
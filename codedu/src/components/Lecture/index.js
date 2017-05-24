import React, { Component } from 'react';
import { Button, Input, TextArea, Form, Segment, Menu } from 'semantic-ui-react';
import MenuBorderless from './Menu';
import ReactMarkdown from 'react-markdown';
import './Lecture.css';

class Lecture extends Component {

  constructor() {
    super();
    this.state = {
      lecture_title: "",
      part: []
    }

    // this.structure = {
    //   lecture_title: "lecture1",
    //   part: [
    //     {
    //       part_title: "part1",
    //       subject: [
    //         {
    //           subject_title: "sub1",
    //           subject_content: "sub1 content",
    //           problems: [
    //             {
    //               problems_content: "problems Content 1",
    //               problems_items: ["first", "second", "third", "fourth"],
    //               problems_answer: 3
    //             }
    //           ]
    //         }
    //       ]
    //     }
    //   ]
    // };
  }

  handleChangeLecture = (evt) => {
    const value = evt.target.value;
    this.setState((state, props) => {
      return {
        lecture_title: value
      }
    });
  }

  addPart = (evt) => {
    const part_title = evt.target.previousSibling.value;
    if(!part_title.length) return;

    const partData = {
      part_title: part_title,
      subject: []
    }

    this.setState((state, props) => {
      return {
        part: state.part.push(partData)
      }
    });
    evt.target.previousSibling.value = "";
  }
  editPart = (part_key, evt) => {
    const part_title = evt.target.previousSibling.value;
    if(!part_title.length) return;

    this.setState((state, props) => {
      state.part[part_key].part_title = part_title;
      return {
        part: state.part
      }
    });
  }

  addSubject = (part_key, evt) => {
    const subject_title = evt.target.previousSibling.value;
    if(!subject_title.length) return;

    const subjectData = {
      subject_title: subject_title,
      subject_content: "",
      problems: []
    }

    this.setState((state, props) => {
      state.part[part_key].subject.push(subjectData);
      return {
        part: state.part
      }
    });
    evt.target.previousSibling.value = "";
  }
  editSubject = (part_key, subject_key, evt) => {
    const subject_title = evt.target.previousSibling.value;
    if(!subject_title.length) return;

    this.setState((state, props) => {
      state.part[part_key].subject[subject_key].subject_title = subject_title;
      return {
        part: state.part
      }
    });
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

    this.setState((state, props) => {
      state.part[part_key].subject[subject_key].subject_content = contentString;
      return {
        part: state.part
      }
    });
  }

  handleChangeSubjectContent = (evt) => {
    const target = evt.target.parentElement.parentElement;
    const value = evt.target.innerText;

    if(value === "Raw") {
      target.classList.add("raw");
    } else {
      target.classList.remove("raw");
    }
    this.forceUpdate();
  }

  addProblems = (part_key, subject_key) => {
    const problemsData = {
        problems_content: "",
        problems_items: [],
        problems_answer: null
    }
    this.setState((state, props) => {
      state.part[part_key].subject[subject_key].problems.push(problemsData);
      return {
        part: state.part
      }
    });
  }

  handleChangeRadio = (part_key, subject_key, problems_key, e, { value }) => {
    let answer;
    switch(value) {
      case "First":
        answer = 1;
        break;
      case "Second":
        answer = 2;
        break;
      case "Third":
        answer = 3;
        break;
      case "Fourth":
        answer = 4;
        break;
      default:
        break;
    }

    this.setState((state, props) => {
      state.part[part_key].subject[subject_key].problems[problems_key].problems_answer = answer;
      return {
        part: state.part
      }
    });
  }

  handleChangeTextArea = (part_key, subject_key, problems_key, evt) => {
    const textAreaString = evt.target.value;

    this.setState((state, props) => {
      state.part[part_key].subject[subject_key].problems[problems_key].problems_content = textAreaString
      return {
        part: state.part
      }
    });
  }

  handleChangeGroup = (part_key, subject_key, problems_key, evt) => {

    const targetString = evt.target.value;
    const target = evt.target.parentElement.previousSibling.innerText;
    let targetNumber;
    switch(target) {
      case "First":
        targetNumber = 0;
        break;
      case "Second":
        targetNumber = 1;
        break;
      case "Third":
        targetNumber = 2;
        break;
      case "Fourth":
        targetNumber = 3;
        break;
        default:
        break;
    }

    this.setState((state, props) => {
      state.part[part_key].subject[subject_key].problems[problems_key].problems_items[targetNumber] = targetString;
      return {
        part: state.part
      }
    });
  }

  getLectureData = () => {
    fetch('/api/lecture', {
      method: 'GET',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials : 'same-origin',
    })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((responseData) => {
      console.log(responseData);
      this.setState(function(state, props) {
        return {
          ...responseData
        }
      });
    })
    .catch((error) => {
      console.log("Fetch Error", error);
    })
  }

  componentDidMount() {
    this.getLectureData();
  }

  render() {
    console.log("state = " , this.state);

    const { lecture_title, part } = this.state;
    const lecture = lecture_title.length;
   
    const partArray = part.map((part_value, part_index) => {
        
        /* subject render */
        const subjectArray = part_value.subject.map((subject_value, subject_index) => {
            return (
              <div className="subject" key={subject_value.subject_title}>
                <div className="subject-edit">
                  <div className="ui action input">
                    <input type="text" placeholder="Add Subject" defaultValue={subject_value.subject_title} />
                    <Button primary onClick={this.editSubject.bind(this, part_index, subject_index)}>EDIT</Button>
                    <Button secondary onClick={this.toggleContent}>Content</Button>
                    <Button onClick={this.toggleContent}>Problems</Button>
                  </div>
                  <div className="content-add">
                    <div className="subject-content-wrap raw">
                      <Menu>
                        <Menu.Item name="Raw" onClick={this.handleChangeSubjectContent} />
                        <Menu.Item name="Markdown" onClick={this.handleChangeSubjectContent} />
                      </Menu>
                      
                      <Form>
                        <TextArea 
                          onChange={this.editContent.bind(this, part_index, subject_index)}
                          placeholder="Add Subject Content"
                          defaultValue={subject_value.subject_content}
                        />
                      </Form>
                      
                      <Segment>
                          <ReactMarkdown className="markdown" source={subject_value.subject_content} />
                        </Segment>
                    </div>
                    <div className="subject-problems-wrap">
                      <MenuBorderless
                        problems={subject_value.problems}
                        part_key={part_index}
                        subject_key={subject_index}
                        addProblems={this.addProblems}
                        handleChangeRadio={this.handleChangeRadio}
                        handleChangeTextArea={this.handleChangeTextArea}
                        handleChangeGroup={this.handleChangeGroup}
                        />
                    </div>
                  </div>
                  
                </div>
              </div>
            )
          });

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

    return (
      <div className="main-wrap">
        <div className="lecture-wrap">
          <Input 
            placeholder="Add Lecture"
            value={lecture_title}
            onChange={this.handleChangeLecture}
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
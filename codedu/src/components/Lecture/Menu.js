import React, { Component } from 'react'
import { Menu, Form, TextArea, Button, Segment } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown';

export default class MenuBorderless extends Component {
  
  constructor() {
    super();
    this.state = { activeItem: 1
    }
  }
  
  handleItemClick = (e, { name }) => {

    const formChildren = e.target.parentElement.nextSibling.children;
    const prevItem = this.state.activeItem;

    if(prevItem === name) {
      const targetChild = formChildren[name-1];
      targetChild.classList.toggle("active");
    } else {
      const prevChild = formChildren[prevItem-1];
      prevChild.classList.remove("active");
      const targetChild = formChildren[name-1];
      targetChild.classList.toggle("active");
    }
    this.setState({ activeItem: name });
  }

  handleChangeRaw = (evt) => {
    evt.preventDefault();
    const value = evt.target.innerText;
    const target = evt.target.parentElement.parentElement;

    if(value === "Raw") {
      target.classList.add("raw");
    } else {
      target.classList.remove("raw");
    }

    this.forceUpdate();
  }

  render() {
    const { activeItem } = this.state;
    const { problems, part_key, subject_key, addProblems, handleChangeTextArea, handleChangeGroup, handleChangeRadio } = this.props;

    const menuItem = [];

    const formItem = problems.map((formValue, index) => {
      const radioValue = formValue.problems_answer;

      menuItem.push(
        (<Menu.Item
          key={index}
          name={(index+1).toString()}
          onClick={this.handleItemClick}
          active={activeItem === (index+1).toString()}
        />));

      return (
        <Form key={index} className="problems-form">
          <Form.Field className="raw">
            <label>Problems
              <Button onClick={this.handleChangeRaw}>Raw</Button>
              <Button onClick={this.handleChangeRaw}>Markdown</Button>
            </label>
            
            <TextArea 
              placeholder='Add Problems'
              onChange={handleChangeTextArea.bind(this, part_key, subject_key, index)}
              defaultValue={formValue.problems_content}
            />

            <Segment>
              <ReactMarkdown className="markdown" source={formValue.problems_content} />
            </Segment>
          </Form.Field>
          <Form.Group widths='equal' onChange={handleChangeGroup.bind(this, part_key, subject_key, index)}>
            <Form.Input label='First' defaultValue={formValue.problems_items[0]} />
            <Form.Input label='Second' defaultValue={formValue.problems_items[1]} />
            <Form.Input label='Third' defaultValue={formValue.problems_items[2]} />
            <Form.Input label='Fourth' defaultValue={formValue.problems_items[3]} />
          </Form.Group>
          <Form.Group inline>
            <label>Answer</label>
            <Form.Radio label="First" value="First" checked={radioValue === 1} onChange={handleChangeRadio.bind(this, part_key, subject_key, index)} />
            <Form.Radio label="Second" value="Second" checked={radioValue === 2} onChange={handleChangeRadio.bind(this, part_key, subject_key, index)} />
            <Form.Radio label="Third" value="Third" checked={radioValue === 3} onChange={handleChangeRadio.bind(this, part_key, subject_key, index)} />
            <Form.Radio label="Fourth" value="Fourth" checked={radioValue === 4} onChange={handleChangeRadio.bind(this, part_key, subject_key, index)} />
          </Form.Group>
        </Form>
      )
    });
    
    return (
      <div>
        <Menu borderless>
          {menuItem}
          <Menu.Item
            icon='plus'
            onClick={addProblems.bind(this, part_key, subject_key)}
          />
        </Menu>
        <div className="problems-form-wrap">
          {formItem}
        </div>
      </div>
    )
  }
}
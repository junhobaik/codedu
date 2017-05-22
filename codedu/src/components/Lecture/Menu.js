import React, { Component } from 'react'
import { Menu, Form } from 'semantic-ui-react'

export default class MenuBorderless extends Component {
  
  constructor() {
    super();
    this.state = { activeItem: 1,
    value: null
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

  addItem = () => {
    this.setState((state, props) => {
      //const arr = state.items;
      const arr = props.problems;
      const problemsData = {
        problems_content: "",
        problems_items: [],
        problems_answer: null
      }
      arr.push(problemsData);
    });
  }

  handleChangeRadio = (index, e, { value }) => {
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
    }

    this.props.problems[index].problems_answer = answer;
    this.forceUpdate();
  }

  handleChangeTextArea = (index, evt) => {
    const textAreaString = evt.target.value;

    this.props.problems[index].problems_content = textAreaString;
  }

  render() {
    const { activeItem, value } = this.state;
    const { problems } = this.props;
    const menuItem = problems.map((value, index) => {
      return (
        <Menu.Item
          key={index}
          name={(index+1).toString()}
          onClick={this.handleItemClick}
          active={activeItem === (index+1).toString()}
        />
      )
    });

    const formItem = problems.map((formValue, index) => {
      const radioValue = formValue.problems_answer;

      return (
        <Form key={index} className="problems-form">
          <Form.TextArea label='Problems' placeholder='Add Problems' onChange={this.handleChangeTextArea.bind(this, index)} />
          <Form.Group widths='equal'>
            <Form.Input label='First' />
            <Form.Input label='Second' />
            <Form.Input label='Third' />
            <Form.Input label='Fourth' />
          </Form.Group>
          <Form.Group inline>
            <label>Answer</label>
            <Form.Radio label="First" value="First" checked={radioValue === 1} onChange={this.handleChangeRadio.bind(this, index)} />
            <Form.Radio label="Second" value="Second" checked={radioValue === 2} onChange={this.handleChangeRadio.bind(this, index)} />
            <Form.Radio label="Third" value="Third" checked={radioValue === 3} onChange={this.handleChangeRadio.bind(this, index)} />
            <Form.Radio label="Fourth" value="Fourth" checked={radioValue === 4} onChange={this.handleChangeRadio.bind(this, index)} />
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
            onClick={this.addItem}
          />
        </Menu>
        <div className="problems-form-wrap">
          {formItem}
        </div>
      </div>
    )
  }
}
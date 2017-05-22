import React, { Component } from 'react'
import { Menu, Form } from 'semantic-ui-react'

export default class MenuBorderless extends Component {
  
  constructor() {
    super();
    this.state = { activeItem: 1,
    items: [],
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

  handleChange = (e, { value }) => this.setState({ value: value })

  addItem = () => {
    this.setState((state, props) => {
      const arr = state.items;
      const length = arr.length;
      arr.push(length+1);
      return {
        items: arr
      }
    });
  }

  render() {
    const { activeItem, items, value } = this.state;
    const menuItem = items.map((value, index) => {
      return (
        <Menu.Item
          key={index}
          name={(index+1).toString()}
          onClick={this.handleItemClick}
          active={activeItem === (index+1).toString()}
        />
      )
    });

    const formItem = items.map((formValue, index) => {
      return (
        <Form key={index} className="problems-form">
          <Form.TextArea label='Problems' placeholder='Add Problems' />
          <Form.Group widths='equal'>
            <Form.Input label='First' />
            <Form.Input label='Second' />
            <Form.Input label='Third' />
            <Form.Input label='Fourth' />
          </Form.Group>
          <Form.Group inline>
            <label>Answer</label>
            <Form.Radio label="First" value="First" checked={value === "First"} onChange={this.handleChange} />
            <Form.Radio label="Second" value="Second" checked={value === "Second"} onChange={this.handleChange} />
            <Form.Radio label="Third" value="Third" checked={value === "Third"} onChange={this.handleChange} />
            <Form.Radio label="Fourth" value="Fourth" checked={value === "Fourth"} onChange={this.handleChange} />
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
import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuBorderless extends Component {
  state = { activeItem: '1',
    items: []
 }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  addItem = () => {
    console.log("Add");
  }

  render() {
    const { activeItem, items } = this.state
    let menuItem;
    

    return (
      <Menu borderless>
        <Menu.Item
          icon='plus'
          onClick={this.addItem}
        />
      </Menu>
    )
  }
}
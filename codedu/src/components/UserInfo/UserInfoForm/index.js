
import React, { Component, PropTypes } from 'react';
import { Form } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

const options = [
    { key: 'icon01', text: 'castle', value: 'castle'},
    { key: 'icon02', text: 'desert', value: 'desert'},
    { key: 'icon03', text: 'iceberg', value: 'iceberg'},
    { key: 'icon04', text: 'mountains', value: 'mountains'},
    { key: 'icon05', text: 'village', value: 'village'},
    { key: 'icon06', text: 'waterfall', value: 'waterfall'}
]

class UserInfoForm extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input label='E-mail' placeholder='codedu@codedu.com' />
                    <Form.Input label='Password' placeholder='Password' />
                    <Form.Input label='Password (confirm)' placeholder='Password' />
                </Form.Group>
                <Form.Group inline>
                    <label>User icon</label>
                    <Form.Radio label='castle' value='castle' checked={value === 'castle'} onChange={this.handleChange} />
                    <Form.Radio label='desert' value='desert' checked={value === 'desert'} onChange={this.handleChange} />
                    <Form.Radio label='iceberg' value='iceberg' checked={value === 'iceberg'} onChange={this.handleChange} />
                    <Form.Radio label='mountains' value='mountains' checked={value === 'mountains'} onChange={this.handleChange} />
                    <Form.Radio label='village' value='village' checked={value === 'village'} onChange={this.handleChange} />
                    <Form.Radio label='waterfall' value='waterfall' checked={value === 'waterfall'} onChange={this.handleChange} />
                </Form.Group>
            </Form>
        );
    }
}

UserInfoForm.propTypes = {

};

export default UserInfoForm;
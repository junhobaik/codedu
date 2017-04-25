
import React, { Component, PropTypes } from 'react';
import { Form } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import imgCastle from '../../../image/castle.png'
import imgDesert from '../../../image/desert.png'
import imgIceberg from '../../../image/iceberg.png'
import imgMountains from '../../../image/mountains.png'
import imgVillage from '../../../image/village.png'
import imgWaterfall from '../../../image/waterfall.png'

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
            <Form className='user-info-form'>
                <Form.Group widths='equal'>
                    <Form.Input label='E-mail' placeholder='codedu@codedu.com' />
                    <Form.Input label='Password' placeholder='Password' />
                    <Form.Input label='Password (confirm)' placeholder='Password' />
                </Form.Group>
                <Form.Group inline className='user-icon'>
                    <label>User icon</label>
                    <div>
                        <img src={imgCastle}/>
                        <Form.Radio className='radio-item' value='castle' checked={value === 'castle'} onChange={this.handleChange} />
                    </div>
                    <div>
                        <img src={imgDesert}/>
                        <Form.Radio className='radio-item' value='desert' checked={value === 'desert'} onChange={this.handleChange} />
                    </div>
                    <div>
                        <img src={imgIceberg}/>
                        <Form.Radio className='radio-item' value='iceberg' checked={value === 'iceberg'} onChange={this.handleChange} />
                    </div>
                    <div>
                        <img src={imgMountains}/>
                        <Form.Radio className='radio-item' value='mountains' checked={value === 'mountains'} onChange={this.handleChange} />
                    </div>
                    <div>
                        <img src={imgVillage}/>
                        <Form.Radio className='radio-item' value='village' checked={value === 'village'} onChange={this.handleChange} />
                    </div>
                    <div>
                        <img src={imgWaterfall}/>
                        <Form.Radio className='radio-item' value='waterfall' checked={value === 'waterfall'} onChange={this.handleChange} />
                    </div>
                </Form.Group>
            </Form>
        );
    }
}

UserInfoForm.propTypes = {

};

export default UserInfoForm;
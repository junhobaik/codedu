import React, { Component, PropTypes } from 'react';
import { Grid } from 'semantic-ui-react'
import DaysOfWeek from './DaysOfWeek';
import Part from './Part';
import Test from './Test';
import UserExp from './UserExp';
import UserLevel from './UserLevel';
import './index.css';

const options = [
    { key: '01', text: 'basic01', value: 'basic01'},
    { key: '02', text: 'basic02', value: 'basic02'},
    { key: '03', text: 'basic03', value: 'basic03'}
]

class Main extends Component {
    
    render() {
        const listItems = options.map((option) =>
            <div className='part-wrap'>
                <Part/>
                <Test/>
            </div>
        );
        return (
            <div className='main-wrap'>
                <Grid>
                    <Grid.Column width={10}>
                        {listItems}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div className='exp-level-wrap'>
                            <div>
                                <h3>경험치</h3>
                                <UserLevel className='level'/>
                            </div>
                            <UserExp/>
                    </div>
                    <div className='days-of-week-wrap'>
                        <h3>공부한날</h3>
                        <DaysOfWeek/>
                    </div>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

Main.propTypes = {

};

export default Main;

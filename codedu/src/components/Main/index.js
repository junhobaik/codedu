import React, { Component, PropTypes } from 'react';
import { Grid } from 'semantic-ui-react'
import DaysOfWeek from './DaysOfWeek';
import Part from './Part';
import Quiz from './Quiz';
import Test from './Test';
import UserExp from './UserExp';
import UserLevel from './UserLevel';
import './index.css';

class Main extends Component {
    render() {
        return (
            <Grid className='main-wrap'>
                <Grid.Column width={12}>
                    <div className='part-wrap'>
                        <Part/>
                    </div>
                </Grid.Column>
                <Grid.Column width={4}>
                    <div className='exp-level-wrap'>
                        <div>
                            <h3>경험치</h3>
                            <UserLevel/>
                        </div>
                        <UserExp/>
                   </div>
                   <div className='days-of-week-wrap'>
                       <DaysOfWeek/>
                   </div>
                </Grid.Column>
            </Grid> 
        );
    }
}

Main.propTypes = {

};

export default Main;

import React, { Component, PropTypes } from 'react';
import { Grid, Table } from 'semantic-ui-react'
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

    initValues = () => {
        fetch('/api/userstats', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((responseData) => {
            const ynArr = responseData.days_of_week.split('')
            this.setState({
                daysOfWeek: {
                    yn: ynArr,
                    sevenDays: this.state.daysOfWeek.sevenDays
                }
            })
        })
        .catch((error) => {
            console.log('Error Fetch', error)
        })

    }

    constructor(props) {
        super(props)
        this.state = {
            email: 'test@test.com',
            level: 1,
            exp: 0,
            daysOfWeek: {
                yn: ['N','N','N','N','N','N','N'],
                sevenDays: ['M','T','W','T','F','S','S']
            }
        }
        this.initValues()
    }

    render() {
        
        const listItems = options.map((option) =>
            <div className='part-wrap'>
                <Part/>
                <Test/>
            </div>
        );

        const ynArr = this.state.daysOfWeek.yn
        const seven = this.state.daysOfWeek.sevenDays
        const tableItems = ynArr.map((yn, index)=> {
            if(yn === 'Y') {
                return <Table.Cell key={index} positive>{seven[index]}</Table.Cell>
            } else {
                return <Table.Cell key={index} negative>{seven[index]}</Table.Cell>
            }
        })
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
                        <DaysOfWeek sevenDayHistory={tableItems}/>
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

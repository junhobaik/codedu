import React, { Component } from 'react';
import { Grid, Table } from 'semantic-ui-react'
import DaysOfWeek from './DaysOfWeek';
import Part from './Part';
import Test from './Test';
import UserExp from './UserExp';
import UserLevel from './UserLevel';
import './index.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            email: 'test@test.com',
            level: 1,
            exp: 0,
            daysOfWeek: {
                yn: ['N','N','N','N','N','N','N'],
                sevenDays: ['M','T','W','T','F','S','S']
            },
            progress: {
                items: []
            }
        }
    }

    initValues = () => {
        fetch('/api/userstats', {
            method: 'POST',
            dataType: 'json',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: sessionStorage.getItem('useremail')
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((responseData) => {
            const ynArr = responseData.days_of_week.split('')
            this.setState({
                level: responseData.level,
                exp: responseData.exp,
                daysOfWeek: {
                    yn: ynArr,
                    sevenDays: this.state.daysOfWeek.sevenDays
                },
                progress: JSON.parse(responseData.progress)
            })
        })
        .catch((error) => {
            console.log('Error Fetch', error)
        })
    }

    getData = () => {
        fetch('/api'+window.location.pathname, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        })
        .then((response) => {
            console.log("getData response is",response);
            return response.json();
        })
        .then((responseData) => {
            console.log("getData responseData is",responseData);
            const data = [];
            for(let i = 0; i < responseData.length; i++){
                data[i] = {title:responseData[i].part_title, quiz:responseData[i].quiz}
            }
            console.log("data is", data);
            this.setState({
                data: data
            })
        })
        .catch((error) => {
            console.log('fetch error', error);
        })
    }

    componentDidMount() {
        this.getData();
        this.initValues();
    }

    render() {
        console.log("this.state is",this.state)
        const state = [...this.state.data]
        console.log("state is", state)
        const progress = this.state.progress.items

        const listItems = state.map((v, index) =>
            <div className='part-wrap'>
                <Part
                    title={v.title} quiz={v.quiz}
                    progress={v.title === progress[index].part_title ? progress[index] : null} />
                <Test
                    progress={v.title === progress[index].part_title ? progress[index].is_test_done : null} />
            </div>
        );
        console.log("listItems is",listItems);

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
                                <UserLevel className='level' level={ this.state.level }/>
                            </div>
                            <UserExp exp={ this.state.exp }/>
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

export default Main;

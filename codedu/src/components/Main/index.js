import React, { Component } from 'react';
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

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
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
            data[1] = {title:'test', quiz:[{problems:[], quiz_content:'quiz1.md', quiz_title:'test quiz 1'},{problems:[], quiz_content:'quiz1.md', quiz_title:'test quiz 2'}]}
            console.log("data is", data);
            this.setState({
                data: data
            })
        })
        .catch((error) => {
            console.log('fetch error', error);
        })
    }

    // getMdData = () => {
    //     fetch('/test.md', {
    //         method: "get",
    //         credentials: 'same-origin'
    //     })
    //     .then((response) => {
    //         console.log(response);
    //         return response.text();
    //     })
    //     .then((responseData) => {
    //         //console.log(responseData);
    //         this.setState({md:responseData});
    //     })
    //     .catch((error) => {
    //         console.log('fetch error', error);
    //     })
    // }

    componentDidMount() {
        this.getData();
        //this.getMdData();
    }
    
    render() {
        console.log("this.state is",this.state)
        console.log("options is",options)
        const state = [...this.state.data];
        console.log("state is", state)


        const listItems = state.map((v) =>
            <div className='part-wrap'>
                <Part title={v.title} quiz={v.quiz}/>
                <Test/>
            </div>
        );
        console.log("listItems is",listItems);


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

export default Main;

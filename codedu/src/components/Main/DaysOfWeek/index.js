import React, { Component, PropTypes } from 'react';
import { Icon, Table } from 'semantic-ui-react'

class DaysOfWeek extends Component {

    state = {
        email: 'test@test.com',
        level: 1,
        exp: 0,
        // days_of_week: ['N','N','N','N','N','N','N'],
        days_of_week: 'NNNNNNN',
        seven_days: ['M','T','W','T','F','S','S']
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
                email: this.state.email
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((responseData) => {
            console.log("updating states")
            this.setState({
                days_of_week: responseData.days_of_week
            })
        })
        .catch((error) => {
            console.log('Error Fetch', error)
        })

    }

    constructor(props) {
        super(props)
        this.initValues()
    }

    render() {
        let day = this.state.days_of_week
        // let listItems = day.map((day)=>
        //     <Table.Cell key={}></Table.Cell>
        // )
        return (
            <Table textAlign='center'>
                <Table.Body>
                    <Table.Row>
                        {day.charAt(0)==='Y'?
                            <Table.Cell positive>M</Table.Cell>
                            :
                            <Table.Cell negative>M</Table.Cell>
                        }
                        {day.charAt(1)==='Y'?
                            <Table.Cell positive>T</Table.Cell>
                            :
                            <Table.Cell negative>T</Table.Cell>
                        }
                        {day.charAt(2)==='Y'?
                            <Table.Cell positive>W</Table.Cell>
                            :
                            <Table.Cell negative>W</Table.Cell>
                        }
                        {day.charAt(3)==='Y'?
                            <Table.Cell positive>T</Table.Cell>
                            :
                            <Table.Cell negative>T</Table.Cell>
                        }
                        {day.charAt(4)==='Y'?
                            <Table.Cell positive>F</Table.Cell>
                            :
                            <Table.Cell negative>F</Table.Cell>
                        }
                        {day.charAt(5)==='Y'?
                            <Table.Cell positive>S</Table.Cell>
                            :
                            <Table.Cell negative>S</Table.Cell>
                        }
                        {day.charAt(6)==='Y'?
                            <Table.Cell positive>S</Table.Cell>
                            :
                            <Table.Cell negative>S</Table.Cell>
                        }
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

DaysOfWeek.propTypes = {

};

export default DaysOfWeek;

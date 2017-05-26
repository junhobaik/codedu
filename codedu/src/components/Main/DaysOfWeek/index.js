import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

class DaysOfWeek extends Component {

    render() {
        return (
            <Table textAlign='center'>
                <Table.Body>
                    <Table.Row>
                        { this.props.sevenDayHistory }
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

export default DaysOfWeek;

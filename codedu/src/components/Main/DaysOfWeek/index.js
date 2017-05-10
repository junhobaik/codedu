import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react'

class DaysOfWeek extends Component {

    constructor(props) {
        super(props)
    }

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

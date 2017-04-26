import React, { Component, PropTypes } from 'react';
import { Icon, Table } from 'semantic-ui-react'

class UserExp extends Component {
    render() {
        return (
            <Table>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell positive>M</Table.Cell>
                        <Table.Cell negative>T</Table.Cell>
                        <Table.Cell positive>W</Table.Cell>
                        <Table.Cell negative>T</Table.Cell>
                        <Table.Cell positive>F</Table.Cell>
                        <Table.Cell positive>S</Table.Cell>
                        <Table.Cell negative>S</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        );
    }
}

UserExp.propTypes = {

};

export default UserExp;
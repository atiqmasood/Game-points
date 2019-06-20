import React, { Component } from 'react';
import styled from 'styled-components';
import { Paper, Table, TableHead, TableRow, TableBody, TableCell, TableFooter } from '@material-ui/core';
import { connect } from 'react-redux';

const TableHeadStyle = styled(TableHead)`
    background: #6c7ae0;
    tr th {
        color: #fff;
    }
`;

const TableRowStyle = styled(TableRow)`
    background: #e9faff;
`;

const TableFooterStyle = styled(TableRow)`
    background: lightblue;
`;

class Grid extends Component {

    render() {
        const { listRecords } = this.props;
        const list = listRecords && listRecords.list;
        return (
            <Paper>
                <Table>
                    <TableHeadStyle>
                        <TableRow>
                            <TableCell>ITEMS</TableCell>
                            <TableCell align="right">QTY</TableCell>
                            <TableCell align="right">SCORE</TableCell>
                        </TableRow>
                    </TableHeadStyle>
                    <TableBody>
                        {
                            Object.keys(list || {}).map((key, index) => {
                                return (
                                    <TableRowStyle key={index}>
                                        <TableCell component="th" scope="row">{list[key].item}</TableCell>
                                        <TableCell align="right">{list[key].quantity}</TableCell>
                                        <TableCell align="right">{list[key].score}</TableCell>
                                    </TableRowStyle>
                                )
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableFooterStyle>
                            <TableCell align="left">Bonuses</TableCell>
                            <TableCell colSpan={2} align="right">{listRecords.bonuses}</TableCell>
                        </TableFooterStyle>
                    </TableFooter>
                </Table>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    listRecords: state.list.data,
});

export default connect(mapStateToProps)(Grid);

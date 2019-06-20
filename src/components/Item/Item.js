import React, { Component } from 'react';
import Button from '../Button/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loadList from '../../store/actions/ListAction';


class Item extends Component {

    static propTypes = {
        loadList: PropTypes.func,
        listRecords: PropTypes.any,
    };

    /*
    * update list
    * */
    loadListData = (e) => {
        e.preventDefault();
        const value = e.target.innerHTML;
        this.props.loadList(this.dataCalculation(value));
    };

    /*
    * calculate data operations
    * */
    dataCalculation = (value) => {
        const { listRecords } = this.props;
        let bonuses = listRecords.bonuses || 0;
        let calculate = {};
        let listItem = {};
        let total = 0;
        const pointTable = { 'A': 50, 'B': 30, 'C': 20, 'D': 15, 'E': 10, };

        if (listRecords && listRecords.list && listRecords.list[value]){
            if ((listRecords.list[value].quantity+1)%3 === 0 && value === 'A'){
                bonuses += pointTable[value];
                calculate = {
                    item: value,
                    quantity: listRecords.list[value].quantity+1,
                    score: pointTable[value]+(listRecords.list[value].score)+pointTable[value]
                };
            } else if ((listRecords.list[value].quantity+1)%2 === 0 && value === 'B') {
                bonuses += pointTable[value];
                calculate = {
                    item: value,
                    quantity: listRecords.list[value].quantity+1,
                    score: pointTable[value]+(listRecords.list[value].score)+pointTable[value]
                };
            } else {
                calculate = {
                    item: value,
                    quantity: listRecords.list[value].quantity+1,
                    score: pointTable[value]+(listRecords.list[value].score)
                };
            }
        } else {
            calculate = {
                item: value,
                quantity: 1,
                score: pointTable[value]
            };
        }

        listItem = {
            list: { ...listRecords.list, [value]: calculate },
            bonuses,
            total: 0
        };
        Object.keys(listItem.list).forEach((key) => {
            total += listItem.list[key].score;
        });
        return {...listItem, total, bonuses};
    };

    render() {
        return (
            <div>
                <Button
                    title={'A'}
                    onClick={this.loadListData}
                />
                <Button
                    title={'B'}
                    onClick={this.loadListData}
                />
                <Button
                    title={'C'}
                    onClick={this.loadListData}
                /><br/>
                <Button
                    title={'D'}
                    onClick={this.loadListData}
                />
                <Button
                    title={'E'}
                    onClick={this.loadListData}
                />
            </div>
        )
    }
}

export default connect(null, { loadList })(Item);

import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemCard from '../ItemCard/ItemCard';
import { Container } from '@material-ui/core';
import Item from '../../components/Item/Item';
import Grid from '../../components/Grid/Grid';
import Button from '../../components/Button/Button';
import loadList from '../../store/actions/ListAction';

const ContainerStyle = styled(Container)`
    display: flex;
    justify-content: center;
    margin-top: 8rem;
`;

const ButtonStyle = styled.span`
    margin-left: 3rem;
    button {
        background-color: cornflowerblue;
    }
`;
const PlayerItemStyle = styled.div`
    margin-left: 1rem !important;
`;


class MainApp extends Component {

    static propTypes = {
        loadList: PropTypes.func,
    };

    newGame = () => {
        this.props.loadList({
            list: {},
            bonuses: 0,
            total: 0
        });
    };

    render() {
        return (
            <ContainerStyle maxWidth="lg">
                <ItemCard
                    title={'Kahoot! points'}
                    content={<Item listRecords={this.props.listRecords} />}
                />
                <PlayerItemStyle >
                    <ItemCard
                        title={'Players Items'}
                        content={
                            <div>
                                <Grid/>
                                <div>
                                    <span>Total</span>
                                    <ButtonStyle>
                                        <Button onClick={this.newGame} title={'New game'}/>
                                    </ButtonStyle><br/>
                                    <span>{this.props.listRecords.total || 0}</span>
                                </div>
                            </div>
                        }
                    />
                </PlayerItemStyle>
            </ContainerStyle>
        )
    }
}

const mapStateToProps = (state) => ({
    listRecords: state.list.data,
});
export default connect(mapStateToProps, { loadList })(MainApp);

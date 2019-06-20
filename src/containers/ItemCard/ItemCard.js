import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card, Typography, CardContent } from '@material-ui/core';

const CardStyle = styled(Card)`
    background-color: #ECF3F4 !important;
`;

class ItemCard extends Component {

    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.any
    };

    render() {
        const { title, content } = this.props;
        return (
            <CardStyle>
                <CardContent>
                    <Typography align={'center'} gutterBottom variant="h5" component="h2">
                        { title && title }
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        { content && content }
                    </Typography>
                </CardContent>
            </CardStyle>
        )
    }
}

export default ItemCard;

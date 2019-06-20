import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as MaterialButton } from '@material-ui/core';

const Wrapper = styled.span`
    margin: 1rem;
    button {
        margin: 1rem;
    }
`;

class Button extends Component{

    static propTypes = {
        title: PropTypes.string,
        onClick: PropTypes.func,
        color: PropTypes.string
    };

    render() {
        const { title, onClick, color } = this.props;
        return (
            <Wrapper>
                <MaterialButton
                    href={''}
                    value={50}
                    variant="contained"
                    size="small"
                    color={color || 'primary'}
                    onClick={ onClick }
                >
                    { title }
                </MaterialButton>
            </Wrapper>
        )
    }
}

export default Button;

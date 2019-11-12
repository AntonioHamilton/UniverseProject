import React from 'react';
import {Container, Title, Description} from './style';

export default class Text extends React.Component {
    render () {
        return (
            <Container id={this.props.id}>
                <Title>{this.props.title}</Title>
                <Description>{this.props.description}</Description>
            </Container>
        )
    }
}
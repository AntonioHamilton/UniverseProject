import React from 'react';
import {Container, Title, Description, Stars, Stars2, Stars3} from './style';

export default class Text extends React.Component {
    render () {
        return (
            <Container id={this.props.id}>
                <Title>{this.props.title}</Title>
                <Description>{this.props.description}</Description>
                <Stars></Stars>
                <Stars2></Stars2>
                <Stars3></Stars3>
            </Container>
        )
    }
}
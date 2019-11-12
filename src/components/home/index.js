import React from 'react';
import {Container, Img} from './style';

export default class Apresentation extends React.Component {
    render () {
        return (
            <Container id="home">
                <Img src={this.props.name} id="image"/>
            </Container>
        )
    }
}


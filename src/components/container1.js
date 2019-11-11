import React from 'react';
import styledComponents from 'styled-components';


const Container = styledComponents.div `
    height:600px;
    background-color:#000002
    border-bottom-style: double;
    border-bottom-color: coral;
    border-bottom-width: thin;
    text-align: -webkit-center;
`

const Title = styledComponents.h1 `
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');
    color: white;
    width: 30%;
    text-align: center;
    padding: 30px 0px 30px 0px;
    font-family: 'Roboto Slab', 'Open Sans', sans-serif;
    font-size: 70px;
`

const Description = styledComponents.p `
    @import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto&display=swap');
    color: white;
    width: 50%;
    text-align: center;
    font-family: 'Roboto Slab', 'Open Sans', sans-serif;
    font-size: 25px;
`

export default class Text extends React.Component {
    render () {
        return (
            <Container>
                <Title>{this.props.title}</Title>
                <Description>{this.props.description}</Description>
            </Container>
            
        )
    }
}
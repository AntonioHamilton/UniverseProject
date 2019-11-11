import React from 'react';
import styledComponents from 'styled-components'

const Container = styledComponents.div `
    margin: 0px;
    top: 0;
    left: 0;
    height: 900px;
`

const Img = styledComponents.img `
    height:100%; 
    width: 100%
`

export default class Apresentation extends React.Component {
    render () {
        return (
            <Container><Img src={this.props.name}/></Container>
        )
    }
}


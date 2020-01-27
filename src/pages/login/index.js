import React from "react";
import { Component } from "react";
import ContainerLogin from '../../components/login/index';
import {Container, Stars, Stars2, Stars3} from '../../components/login/style'

export default class IndexPage extends Component {
  render () {
    return (
      <div style={{
        "height": "100%",
        "width": "100%",
        "display": "list-item",
        "position": "absolute"
        }}>
        <Container >
          <ContainerLogin></ContainerLogin>
        </Container>
        <Stars></Stars>
        <Stars2></Stars2>
        <Stars3></Stars3>
      </div>
    )
  }
}


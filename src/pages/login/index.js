import React from "react";
import { Component } from "react";
import ContainerLogin from '../../components/login/index';
//import {Container} from './style';
import {Container, Stars, Stars2, Stars3} from '../../components/content/style'

export default class IndexPage extends Component {
  render () {
    return (
      <div>
        <Container>
          <ContainerLogin></ContainerLogin>
          
        </Container>
        <Stars></Stars>
        <Stars2></Stars2>
        <Stars3></Stars3>
      </div>
    )
  }
}


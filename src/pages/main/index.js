import React from "react";
import { Component } from "react";
import Home from '../../components/home/index';
import Menu from '../../components/menu/index';
import Content1 from '../../components/content/container1/index';
import Content2 from '../../components/content/container2/index';
import img from '../../assets/background.png';

export default class IndexPage extends Component {
  render () {
    return (
      <div>
        <Home name={img}/>
        <Menu/>
        <Content1 id="App" title="O Aplicativo" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
        <Content2 id="About" title="Sobre nós"/>
        <Content1 id="Contact" title="Contato" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."/>
      </div>
    )
  }
}


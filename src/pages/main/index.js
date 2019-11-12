import React from "react";
import { Component } from "react";
import Home from '../../components/home/index';
import Menu from '../../components/menu/index';
import Content from '../../components/content/index';

export default class IndexPage extends Component {
  render () {
    return (
      <div>
        <Home name="https://www.pixelstalk.net/wp-content/uploads/images1/Dark-space-wallpaper-1920x1200.jpg"/>
        <Menu/>
        <Content id="App" title="O Aplicativo" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
        <Content id="About" title="Sobre nós" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"/>
        <Content id="Contact" title="Contato" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."/>
      </div>
    )
  }
}


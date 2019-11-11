import React from "react";
import { Component } from "react";

import Apresentation from '../components/apresentation';
import Menu from '../components/menu';
import Container1 from '../components/container1';


class IndexPage extends Component {
  render () {
    return (
      <div>
        <Apresentation name="https://get.wallhere.com/photo/dusk-sunset-dark-photography-Moon-night-sky-night-sky-skyscape-landscape-trees-stars-comet-starry-night-edit-purple-evening-silhouette-crescent-moon-shooting-stars-purple-sky-astronomy-meteors-1618571.jpg"/>
        <Menu/>
        <Container1 id="Aplicativo" title="O Aplicativo" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"/>
        <Container1 id="About" title="Sobre nós" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"/>
        <Container1 id="Contact" title="Contato" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."/>
      </div>
    )
  }
}

export default IndexPage;
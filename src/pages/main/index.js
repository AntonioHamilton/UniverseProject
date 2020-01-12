import React from "react";
import { Component } from "react";
//import Home from '../../components/home/index';
import Menu from '../../components/menu/index';
import { Container, Background} from './style';
import Content1 from '../../components/content/container1/index';
import Content2 from '../../components/content/container2/index';
import Content4 from '../../components/content/container4/index';
import Footer from '../../components/content/footer/index';
import Slider from '../../components/planetSlider2/index'

export default class IndexPage extends Component {
  render () {
    return (
      <Container>
        <Container>
          <Slider></Slider>
          <Menu/>
          <Content1 id="App" title="O Aplicativo" description="Nosso Objetivo com essa aplicação web é conseguir reunir em um único banco de dados  entidades celestes do universo. É uma proposta ambiciosa, de código aberto, porém tudo foi e está sendo feito com muito fervor e entusiasmo. Todas as funcionalidades foram desenvolvidas com intuito de permitir que o usuário crie, modifique e delete os corpos presentes no universo. Espero que gostem e façam bom proveito!"/>
          <Content2 id="About" title="Sobre nós" description="Nós somos dois estudantes da Universidade Federal de Sergipe, onde cursamos o 4º período. Extremamente apaixonados por tecologia e entusiastas nas áreas, tanto web e mobile, quanto jogos. Temos ambos a mesma idade (19 anos). No momento trabalhamos na SofTeam, Empresa Júnior de Computação, onde aprendemos bastante diariamente. Para ver outros dos nossos projetos você pode acessar os links acima."/>
          <Content4 id="Contact" title="Contato" description="Para entrar em contato acesse nossas redes sociais, ou nos envie um email: antoniohamilton.s.freitas@gmail.com ou ..."/>
          <Footer></Footer>
        </Container>
      </Container>
      
    )
  }
}


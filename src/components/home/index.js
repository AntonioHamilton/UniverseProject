import React from 'react';
import { Container } from './style';
import { Slide } from 'react-slideshow-image'

import {SlideShow, SlideInfo, SlideImg, SlideTitle, SlideText} from './style'

import sol from '../../assets/images/slide/sol.png'
import mercurio from '../../assets/images/slide/mercurio.png'
import venus from '../../assets/images/slide/venus.png'
import terra from '../../assets/images/slide/terra.png'
import marte from '../../assets/images/slide/marte.png'
import jupiter from '../../assets/images/slide/jupiter.png'
import saturno from '../../assets/images/slide/saturno.png'
import urano from '../../assets/images/slide/urano.png'
import netuno from '../../assets/images/slide/netuno.png'

const properties = {
    duration: 1000000000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const SlideCss = {
    width: '100%',
    alignSelf: 'center',
    height: 'auto',
}

const slides = [
    {image: sol, titulo:"Sol" , resumo:"O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor."},
    {image: mercurio, titulo:"Mercúrio" , resumo:"Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar."},
    {image: venus, titulo:"Vênus" , resumo:"Vénus ou Vênus é o segundo planeta do Sistema Solar em ordem de distância a partir do Sol, orbitando-o a cada 224,7 dias. Recebeu seu nome em homenagem à deusa romana do amor e da beleza Vénus, equivalente a Afrodite."},
    {image: terra, titulo:"Terra" , resumo:"A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida."},
    {image: marte, titulo:"Marte" , resumo:'Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra, muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.'},
    {image: jupiter, titulo:"Júpiter" , resumo:"Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol. Possui menos de um milésimo da massa solar, contudo tem 2,5 vezes a massa de todos os outros planetas em conjunto. É um planeta gasoso, junto com Saturno, Urano e Netuno."},
    {image: saturno, titulo:"Saturno" , resumo:"Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas."},
    {image: urano, titulo:"Urano" , resumo:"Urano é o sétimo planeta a partir do Sol, o terceiro maior e o quarto mais massivo dos oito planetas do Sistema Solar. Foi nomeado em homenagem ao deus grego do céu, Urano, o pai de Cronos e o avô de Zeus."},
    {image: netuno, titulo:"Netuno" , resumo:"Netuno ou Neptuno é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres."},
]

const ImpresiveSlide = () => (
    <Container style={{marginTop: '0px'}}>
        <Slide {...properties} style={SlideCss}>
            {slides.map((item, index)=>(
                <SlideShow className="each-slide" key={index} prop1={item.image}>
                    <SlideImg src={item.image}/>
                    <SlideInfo>
                        <SlideTitle>{item.titulo}</SlideTitle>
                        <SlideText>{item.resumo}</SlideText>
                    </SlideInfo>
                </SlideShow>
            ))}
            
        </Slide>
    </Container>
)

export default ImpresiveSlide;
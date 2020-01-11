import React from 'react'
import { Container } from './style';
import { Slide } from 'react-slideshow-image'

import { SlideShow, SlideInfo, SlideImg, SlideTitle, SlideText } from './style'

import img from '../../assets/images/marte.png'

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
    {image: img, titulo:"Sol" , resumo:"O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor."}
]

const PlanetSlider = () => (
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

export default PlanetSlider;
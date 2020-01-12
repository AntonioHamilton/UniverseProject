/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from './style';
import { Slide } from 'react-slideshow-image'
import {SlideShow, SlideInfo, SlideImg, SlideTitle, SlideText} from './style'
import img from '../../assets/images/marte.png'

const PlanetSlider = ({menu}) => {

    const [slides, setSlides] = useState([])

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

    return (
    <Container style={{marginTop: '0px'}}>
        <Slide {...properties} style={SlideCss}>
            {slides.map((item, index)=>(
                <SlideShow className="each-slide" key={index} prop1={item.image}>
                    <SlideInfo>
                        <SlideTitle>{item.nome}</SlideTitle>
                        <SlideText>{item.distancia_terra}</SlideText>
                    </SlideInfo>
                </SlideShow>
            ))}
            
        </Slide>
    </Container>
    )
}

/*<SlideImg src={item.image}/>*/

/*export default PlanetSlider;*/
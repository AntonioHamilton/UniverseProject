import React from 'react';
import { Container } from './style';
import { Slide } from 'react-slideshow-image'

import {SlideShow, SlideInfo, SlideImg, SlideTitle, SlideText} from './style'

import img1 from '../../assets/images/slide/slide1.png'
import img2 from '../../assets/images/slide/slide2.png'
import img3 from '../../assets/images/slide/slide3.png'

const properties = {
    duration: 10000000,
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
        {image: img1, titulo:"IGREJA EM ITABAIANA" , resumo:"A igreja mais bonita da cidade eu queria que todos pudessem ver pq é bem bonita mesmo, só estou enrolando nesse texto espero que ninguém leia totalmente, mas é bem legal né não?"},
        {image: img2, titulo:"JOGÃO EM ITABAIANA" , resumo:"A primeira partida patrocinada de itabaiana"},
        {image: img3, titulo:"SHOPPING PEIXOTO EM ITABAIANA" , resumo:"Esse shopping localizado no centro da cidade, é alvo de uma massiva quantidade de consumidores todos os dias"}
]

const ImpresiveSlide = () => (
    <Container style={{marginTop: '0px'}}>
        <Slide {...properties} style={SlideCss}>
            {slides.map((item, index)=>(
                <SlideShow className="each-slide" key={index}>
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
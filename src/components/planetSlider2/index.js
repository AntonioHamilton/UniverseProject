import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import img from '../../assets/images/53084.jpg'
import img1 from '../../assets/images/45399.jpg'
import img2 from '../../assets/images/45402.jpg'
import img3 from '../../assets/images/45406.jpg'
import img4 from '../../assets/images/45417.jpg'
import img5 from '../../assets/images/45428.jpg'
import img6 from '../../assets/images/7046.jpg'

import {Container, WrapSlider, WrapPost, ImgSlider, Post} from './style'

const PlanetSlider = () => {
    return (
        <Container id="Slider">
            <WrapSlider>
                <AwesomeSlider cssModule={AwesomeSliderStyles}>
                    <WrapPost>
                        <ImgSlider src={img6}></ImgSlider>
                        <Post></Post>
                    </WrapPost>
                    <div data-src={img1}/>
                    <div data-src={img2}/>
                    <div data-src={img4}/>
                    <div data-src={img5}/>
                   
                </AwesomeSlider>
            </WrapSlider>
        </Container>
    )
}

export default PlanetSlider;
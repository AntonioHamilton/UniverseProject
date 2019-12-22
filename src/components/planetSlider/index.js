import React from 'react';

import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

import img from '../../assets/images/marte.png'

import {Container, WrapSlider} from './style'

const PlanetSlider = () => {
    return (
        <Container className="Slider">
            <WrapSlider>
                <AwesomeSlider cssModule={AwesomeSliderStyles}>
                    <div data-src={img}/>
                    <div data-src={img}/>
                    <div data-src={img}/>
                    <div data-src={img}/>
                </AwesomeSlider>
            </WrapSlider>
        </Container>
    )
}

export default PlanetSlider;
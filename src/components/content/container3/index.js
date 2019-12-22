import Lottie from 'react-lottie'
import React, {Component} from 'react'
import {Container} from './style'


import porkAnimation from '../../../assets/animations/pork-dance.json'
import dogAnimation from '../../../assets/animations/dancing-dog.json'

export default class Container3 extends Component {


    render () {

        const pork = {
            loop: true,
            autoplay: true, 
            animationData: porkAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };

        const dog = {
            loop: true,
            autoplay: true, 
            animationData: dogAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <Container>
                <Lottie 
                    options={pork}
                    height={300}
                    width={300}
                    isStopped={false}
                    isPaused={false}
                />
                <Lottie 
                    options={dog}
                    height={300}
                    width={300}
                    isStopped={false}
                    isPaused={false}
                />
            </Container>
        )
    }
}
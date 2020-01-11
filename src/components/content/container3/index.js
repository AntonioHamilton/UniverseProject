import Lottie from 'react-lottie'
import React, {Component} from 'react'
import {Container} from './style'

import RocketAnimation from '../../../assets/animations/9386-banner-app-animation';

export default class Container3 extends Component {


    render () {


        const rocket = {
            loop: true,
            autoplay: true, 
            animationData: RocketAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <Container>
                <Lottie 
                    options={rocket}
                    height={300}
                    width={300}
                    isStopped={false}
                    isPaused={false}
                />
            </Container>
        )
    }
}
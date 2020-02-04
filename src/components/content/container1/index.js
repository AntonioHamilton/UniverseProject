import React from 'react';
import {Container, Title, Description, WrapAnimation} from './style';
import Lottie from 'react-lottie'
import Rocket from '../../../assets/animations/1712-bms-rocket.json';

export default class Content1 extends React.Component {
    render () {
        const rocket = {
            loop: true,
            autoplay: true, 
            animationData: Rocket,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
        return (
            <Container id={this.props.id}>
                <Title>{this.props.title}</Title>
                <Description>{this.props.description}</Description>
                <WrapAnimation>
                    <Lottie 
                        options={rocket}
                        height={300}
                        width={300}
                        isStopped={false}
                        isPaused={false}
                    />
                </WrapAnimation>
            </Container>
        )
    }
}
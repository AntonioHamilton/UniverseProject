import React from 'react';
import {Container, Title, Description} from './style';
import Lottie from 'react-lottie'
import PhoneAnimation from '../../../assets/animations/9386-banner-app-animation';
export default class Content1 extends React.Component {
    render () {
        const phone = {
            loop: true,
            autoplay: true, 
            animationData: PhoneAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <Container id={this.props.id}>
                <Title>{this.props.title}</Title>
                <Description>{this.props.description}</Description>
                <Lottie 
                    options={phone}
                    height={300}
                    width={300}
                    isStopped={false}
                    isPaused={false}
                />
            </Container>
        )
    }
}
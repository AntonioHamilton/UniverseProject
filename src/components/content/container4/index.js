import React from 'react';
import {Container, Title, Description, WrapContacts, Icon, Social, WrapContacts2, Phone} from './style';
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
                <WrapContacts>
                    Antonio H.
                    <a><Social style={{height: '70px', width:'70px'}} src='https://i.pinimg.com/originals/58/f4/72/58f4723d8f23906bdcb058604075ad2a.png'/></a>
                    <a href=""><Social src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png'/></a>
                </WrapContacts>
                <WrapContacts>
                    Yves B.
                    <a><Social style={{height: '70px', width:'70px'}} src='https://i.pinimg.com/originals/58/f4/72/58f4723d8f23906bdcb058604075ad2a.png'/></a>
                    <a href=""><Social src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png'/></a>
                </WrapContacts>
                <WrapContacts2>
                    <Phone><Icon src="https://www.freepngimg.com/thumb/email_marketing/62507-icons-marketing-webmail-computer-email-icon.png"/>antoniohamilton.s.freitas@gmail.com</Phone>
                    <Phone><Icon src="https://www.freepngimg.com/thumb/email_marketing/62507-icons-marketing-webmail-computer-email-icon.png"/>yves.b@gmail.com</Phone>
                </WrapContacts2>
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
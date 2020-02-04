import React from 'react';
import {Container, Title, Description, WrapContacts, Icon, Social, WrapContacts2, Phone} from './style';
import Lottie from 'react-lottie'
import PhoneAnimation from '../../../assets/animations/9386-banner-app-animation';
import facebook from '../../../assets/icons/facebook.png'
import instagram from '../../../assets/icons/instagram.png'

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
                <WrapContacts style={{flexDirection: 'column', justifyContent: 'center'}}>
                    <WrapContacts>
                        <strong>Antonio H.</strong>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/antonio.hamilton.90226'><Social style={{height: '32px', width:'32px'}} src={facebook}/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/antonio_hamilton2/"><Social src={instagram}/></a>
                    </WrapContacts>
                    <WrapContacts>
                        <strong>Yves Luis.</strong>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/yves.luis.7"><Social style={{height: '32px', width:'32px'}} src={facebook}/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yvesbastos/"><Social src={instagram}/></a>
                    </WrapContacts>
                </WrapContacts>
                <WrapContacts2>
                    <Phone><Icon src="https://www.freepngimg.com/thumb/email_marketing/62507-icons-marketing-webmail-computer-email-icon.png"/>antoniohamilton.s.freitas@gmail.com</Phone>
                    <Phone><Icon src="https://www.freepngimg.com/thumb/email_marketing/62507-icons-marketing-webmail-computer-email-icon.png"/>yvesbastos99@gmail.com</Phone>
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
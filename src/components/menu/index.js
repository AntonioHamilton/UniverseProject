import React from 'react';
import Lottie from 'react-lottie'
import { HamburgerButton } from 'react-hamburger-button'
import { HamburgerStyle, Menu, Nav, Link, Login, Image } from './style';
import animationData from '../../assets/animations/3169-world.json'
import img from '../../assets/images/LOGO.png'

export default class MenuComp extends React.Component {
    
    state = {
        enable: false
    }

    render () {

        const defaultOptions = {
            loop: true,
            autoplay: true, 
            animationData: animationData,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
        };
    
        return (
            <>
                <HamburgerStyle enable={this.state.enable}>
                    <HamburgerButton
                        open={this.state.enable}
                        onClick = {() => this.setState({enable: !this.state.enable})}
                        width={20}
                        height={20}
                        strokeWidth={3}
                        color='#237ebf'
                        animationDuration={0.5}
                    />
                </HamburgerStyle>
                <Menu enable={this.state.enable}>
                        <Link color='none' href="/#Slider">
                            <Image src={img}/>
                        </Link>
                        <Nav id="nav">
                            <Nav><Link href="/#Slider">Home</Link></Nav>
                            <Nav><Link href="/#App">O Aplicativo</Link></Nav>
                            <Nav><Link href="/#About">Sobre nós</Link></Nav>                            
                            <Nav><Link className="contato" href="/#Contact">Contato</Link></Nav>
                            <Login className="login" href="/login">Login</Login>
                        </Nav>
                </Menu>
            </>
        )
    }
}
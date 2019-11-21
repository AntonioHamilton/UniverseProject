import React from 'react';
import Lottie from 'react-lottie'
import { Menu, Nav, Link, Login } from './style';

import animationData from '../../assets/3169-world.json'



class MenuComp extends React.Component {
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
            <Menu>
                <Link href="#image">
                    <Lottie 
                        options={defaultOptions}
                        height={30}
                        width={30}
                        isStopped={false}
                        isPaused={false}
                    />
                </Link>
                <Nav id="nav">
                    <Nav><Link href="/#App">O Aplicativo</Link></Nav>
                    <Nav><Link href="/#About">Sobre nós</Link></Nav>
                    <Nav><Link href="/#Contact">Contato</Link></Nav>
                </Nav>
                <Login className="login" href="/login">Login</Login>
            </Menu>
        )
    }
}

export default MenuComp;
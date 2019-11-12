import React from 'react';
import { Menu, Nav, Link, Logo, Joke } from './style';

const MenuComp = () => {
    return (
        <Menu>
            <Link href="#image"><Logo src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="logo"/></Link>
            <Nav id="nav">
                <Nav><Link href="#App">O Aplicativo</Link></Nav>
                <Nav><Link href="#About">Sobre nós</Link></Nav>
                <Nav><Link href="#Contact">Contato</Link></Nav>
            </Nav>
            <Joke className="joke" href="Joke">Teste</Joke>
        </Menu>
    )
}

export default MenuComp;
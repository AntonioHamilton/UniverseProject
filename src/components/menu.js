import React from 'react';
import styledComponents from 'styled-components';

const Menu = styledComponents.div `
    position: sticky;
    top: 0;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    font-family: cursive;
    font-size: x-large;
    color: white;
    background-color:#000002;
    border-bottom-style: double;
    border-bottom-color: coral;
    border-bottom-width: thin;
}
`

const Logo = styledComponents.a `
    margin-left: 50px;
`

const Nav = styledComponents.ul `

    display: flex;
    padding: 10px;

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        color: orange;
        text-decoration: underline;
        cursor: Pointer;
    }
`

const Joke = styledComponents.a `
    color: white;
    text-decoration: none;
    margin-right: 50px;

    :hover {
        color: orange;
        text-decoration: underline;
    }
`

const MenuComp = () => {
    return (
        <Menu>
            <Logo href="img"><img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="logo" style={{"height":"50px"}}/></Logo>
            <Nav>
                <ul><a href="#App">O Aplicativo</a></ul>
                <ul><a href="#About">Sobre nós</a></ul>
                <ul><a href="#Contact">Contato</a></ul>
            </Nav>
            <Joke href="Joke">
                Teste
            </Joke>
        </Menu>
    )
}

export default MenuComp;
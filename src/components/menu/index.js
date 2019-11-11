import React from 'react';
import './style.css';

const MenuComp = () => {
    return (
        <div id="menu">
            <a id="logo" href="#image"><img src="https://png.pngtree.com/element_pic/16/11/02/bd886d7ccc6f8dd8db17e841233c9656.jpg" alt="logo" style={{"height":"50px"}}/></a>
            <ul id="nav">
                <ul>
                    <a href="#App">O Aplicativo</a>
                </ul>
                <ul>
                    <a href="#About">Sobre nós</a>
                </ul>
                <ul>
                    <a href="#Contact">Contato</a>
                </ul>
            </ul>
            <a id="joke" href="Joke">
                Teste
            </a>
        </div>
    )
}

export default MenuComp;
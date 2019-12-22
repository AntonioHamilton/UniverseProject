import React, {useState} from "react";
import { Component } from "react";
import {Container, WrapInput ,Head, Menu, ItensMenu, Item, Lupa, Search, MenuUser, UserName, User} from './style';
import { HamburgerButton } from 'react-hamburger-button'
import imgLupa from '../../assets/icons/lupa.png'
import imgUser from '../../assets/icons/boneco.png'


const SystemPage = () =>{

  
  const [enable, setEnable] = useState(false)
  
  const [nome, setNome] = useState('Yves')

  return (
    <Container>
        <Head>
          <WrapInput>
            <Menu>
            <HamburgerButton
                        open={enable}
                        onClick = {() => setEnable(!enable)}
                        width={18}
                        height={15}
                        strokeWidth={1}
                        color='black'
                        animationDuration={0.5}
            />
            <ItensMenu enable={enable}>dsadas</ItensMenu>
            </Menu>
            <Lupa src={imgLupa} ></Lupa>
            <Search placeholder="Buscar" ></Search>
          </WrapInput>

          <MenuUser>
            <UserName>Oi, {nome}</UserName>            
            <User src={imgUser}></User>
          </MenuUser>
        </Head>

    </Container>
  )
}


export default SystemPage
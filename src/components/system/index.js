import React, {useState, useEffect} from "react";
import {Container, WrapInput ,Head, Menu, ItensMenu, ItemMenu, Lupa, Search, MenuUser, UserName, User, WrapSettings, ItemSettings, WrapItemSettings} from './style';
import { HamburgerButton } from 'react-hamburger-button'
import imgLupa from '../../assets/icons/lupa.png'
import imgUser from '../../assets/icons/boneco.png'

const aleatorio = Math.floor(Math.random()*100 % 5);
const frase = ['Fala tu', 'Oi', 'Olá', 'Bem-vindo', 'Eaew']

const SystemPage = () =>{

  const [enableMenu, setEnableMenu] = useState(false);
  const [enableSettings, setSettings] = useState(false);
  const [nome, setNome] = useState('Yves');

  const changeName = () => {
    setNome('Antonio')
  }

  useEffect(() => {
    changeName();
  }, [])

  return (
    <Container>
        <Head>
          <WrapInput>
            <Menu>
              <HamburgerButton
                open={enableMenu}
                onClick = {() => setEnableMenu(!enableMenu)}
                width={18}
                height={15}
                strokeWidth={1}
                color='black'
                animationDuration={0.5}
              />
              <ItensMenu enableMenu={enableMenu}>
                <ItemMenu>Galáxia</ItemMenu>
                <ItemMenu>Sistemas planetários</ItemMenu>
                <ItemMenu>Planetas</ItemMenu>
                <ItemMenu>Luas</ItemMenu>
                <ItemMenu>Estrelas</ItemMenu>
              </ItensMenu>
            </Menu>
            <Lupa src={imgLupa} ></Lupa>
            <Search placeholder="Buscar" ></Search>
          </WrapInput>
          <MenuUser>
            <UserName>{frase[aleatorio]}, {nome}</UserName>            
            <User src={imgUser} onClick={() => {
              setSettings(!enableSettings)
            }}></User>
            <WrapSettings enableSettings={enableSettings}>
              <WrapItemSettings>           
              <UserName>{frase[aleatorio]}, {nome}</UserName>  
                <User src={imgUser} onClick={() => setSettings(!enableSettings)}></User>
              </WrapItemSettings>
              <ItemSettings>CONFIGURAÇÕES</ItemSettings>
              <ItemSettings>SAIR</ItemSettings>
              <ItemSettings>LINGUIÇA</ItemSettings>
            </WrapSettings>
          </MenuUser>
        </Head>
    </Container>
  )
}


export default SystemPage
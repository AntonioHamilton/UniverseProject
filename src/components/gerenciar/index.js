import React, {useState, useEffect} from "react";
import {Container, WrapInput ,Head, Menu, ItensMenu, ItemMenu, Lupa, Search, MenuUser, UserName, User, ItemSettings, WrapSettings, WrapItemSettings} from './style';
import { HamburgerButton } from 'react-hamburger-button'
import imgLupa from '../../assets/icons/lupa.png'
import imgUser from '../../assets/icons/boneco.png'


const ManagePage = () =>{

  const aleatorio = Math.floor(Math.random()*100 % 2);
  const fraseSaida = ['já vai?', 'tudo bem?']
  const [enableMenu, setEnableMenu] = useState(false)
  const [nome, setNome] = useState('Yves')
  const [enableSettings, setSettings] = useState(false);
  const [lista, setLista] = useState('')

  const galaxia = ['Id', 'Nome', 'Quantidade de sistemas', 'Distância da Terra']
  const planetas = ['Id', 'Nome', 'Tamanho', 'Massa', 'Gravidade', 'Complemento']

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
            <Menu enable={enableMenu}>
              <HamburgerButton style={{zIndex: 20}}
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
                <ItemMenu>Satélites naturais</ItemMenu>
                <ItemMenu>Estrela</ItemMenu>
                <ItemMenu>Anã vermelha</ItemMenu>
                <ItemMenu>Anã branca</ItemMenu>
                <ItemMenu>Estrela binária</ItemMenu>
                <ItemMenu>Gigante azul</ItemMenu>
                <ItemMenu>Gigante vermelha</ItemMenu>
              </ItensMenu>
            </Menu>
            <Lupa src={imgLupa} ></Lupa>
            <Search placeholder="Buscar" ></Search>
          </WrapInput>

          <MenuUser>
            <UserName>Oi, {nome}</UserName>            
            <User src={imgUser} src={imgUser} onClick={() => {
              setSettings(!enableSettings)}}  ></User>
            <WrapSettings enableSettings={enableSettings}>
              <WrapItemSettings>
                <UserName style={{padding:'0 0 0 0'}}>{nome}, {fraseSaida[aleatorio]}</UserName>
                <User src={imgUser} style={{margin:'0 0 0 30px'}} onClick={() => setSettings(!enableSettings)}></User>
              </WrapItemSettings>
              <ItemSettings href="/sistema">BUSCAR ENTIDADES</ItemSettings>
              <ItemSettings>CONFIGURAÇÕES</ItemSettings>
              <ItemSettings href="/">SAIR</ItemSettings>
            </WrapSettings>
          </MenuUser>
        </Head>
        {}
        

    </Container>
  )
}

export default ManagePage;
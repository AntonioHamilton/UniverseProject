import React, { useState, useEffect } from "react";
import {
  Container,
  WrapInput,
  Head,
  Menu,
  ItensMenu,
  ItemMenu,
  Lupa,
  Search,
  MenuUser,
  UserName,
  User,
  ItemSettings,
  WrapSettings,
  WrapItemSettings
} from "./style";
import { HamburgerButton } from "react-hamburger-button";
import imgLupa from "../../assets/icons/lupa.png";
import imgUser from "../../assets/icons/boneco.png";
import { logout } from "../../services/auth";

const ManagePage = ({ data, changeMenu }) => {
  const aleatorio = Math.floor((Math.random() * 100) % 2);
  const fraseSaida = ["já vai?", "tudo bem?"];
  const [enableMenu, setEnableMenu] = useState(false);
  const [nome, setNome] = useState("Yves");
  const [enableSettings, setSettings] = useState(false);
  const [activated, setActivated] = useState(false);

  const changeName = () => {
    setNome(localStorage.getItem("name"));
  };

  useEffect(() => {
    changeName();
  }, []);

  return (
    <Container>
      <Head>
        <WrapInput>
          <Menu enable={enableMenu}>
            <HamburgerButton
              style={{ zIndex: 20 }}
              open={enableMenu}
              onClick={() => setEnableMenu(!enableMenu)}
              width={18}
              height={15}
              strokeWidth={1}
              color="black"
              animationDuration={0.5}
            />
            <ItensMenu enableMenu={enableMenu}>
              <ItemMenu onClick={() => changeMenu("galaxia")}>Galáxia</ItemMenu>
              <ItemMenu onClick={() => changeMenu("sistema")}>
                Sistemas planetários
              </ItemMenu>
              <ItemMenu onClick={() => changeMenu("planeta")}>
                Planetas
              </ItemMenu>
              <ItemMenu onClick={() => changeMenu("satelite")}>
                Satélites naturais
              </ItemMenu>
              <ItemMenu onClick={() => changeMenu("estrela")}>Estrela</ItemMenu>
              <ItemMenu onClick={() => changeMenu("giganteVermelha")}>
                Gigante vermelha
              </ItemMenu>
            </ItensMenu>
          </Menu>
          <Lupa
            src={imgLupa}
            onClick={() => {
              setActivated(!activated);
              console.log(activated);
            }}
          ></Lupa>
          <Search placeholder="Buscar" activated={activated}></Search>
        </WrapInput>

        <MenuUser>
          <UserName>Oi, {nome}</UserName>
          <User
            src={imgUser}
            onClick={() => {
              setSettings(!enableSettings);
            }}
          ></User>
          <WrapSettings enableSettings={enableSettings}>
            <WrapItemSettings>
              <UserName style={{ padding: "0 0 0 0" }}>
                {nome}, {fraseSaida[aleatorio]}
              </UserName>
              <User
                src={imgUser}
                style={{ margin: "0 0 0 30px" }}
                onClick={() => setSettings(!enableSettings)}
              ></User>
            </WrapItemSettings>
            <ItemSettings color="#237ebf" href="/sistema">
              BUSCAR ENTIDADES
            </ItemSettings>
            <ItemSettings color="#237ebf">CONFIGURAÇÕES</ItemSettings>
            <ItemSettings
              color="#E12E1C"
              href="/"
              onClick={() => {
                logout();
              }}
            >
              SAIR
            </ItemSettings>
          </WrapSettings>
        </MenuUser>
      </Head>
    </Container>
  );
};

export default ManagePage;

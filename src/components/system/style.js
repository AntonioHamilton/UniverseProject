import styled from 'styled-components';

export const Container = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    background: white;

`
export const Head = styled.div `
    display: flex;
    height: 10vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const WrapInput = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 100%;
`

export const Menu = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 230px 0px 20px;
    width: 40px;
    height: 40px;
`
export const ItensMenu = styled.div `
    display: flex;
    position: fixed;
    top: 10vh;
    left: ${({enable}) => enable ? 0 : -600}px;
    width: 100px;
    height: 90vh;
    background: red;
`
export const Item = styled.div `

`

export const TextMenu = styled.h1 `

`
export const Lupa = styled.img `
    height: 33px;
`
export const Search = styled.input `
    width: 100%;
    height: 100%;
    padding: 0px 15px;
    border: 0;
    outline: none;
    font-size: 24px;
`

export const MenuUser = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserName = styled.h3`
    color: black;
    font-size: 16px;
    padding: 0px 15px;
`

export const User = styled.img `
    margin: 0px 20px;
    width: 45px;
    height: 45px;
    border-radius: 9999999px;
    background: black; 
`
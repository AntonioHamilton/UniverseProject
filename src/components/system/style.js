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
    border-bottom: 1px solid #E6EAEA;
    background: #F4F7F6;
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
    left: ${({enableMenu}) => enableMenu ? 0 : -600}px;
    width: 200px;
    height: 90vh;
    border-right: 1px solid #E6EAEA;
    border-top: 1px solid #E6EAEA;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: black;
`
export const ItemMenu = styled.a `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #E6EAEA;
    width: 200px;
    height: 18vh;
    background: #F4F7F6;
    :hover {
        background: white;
        cursor: Pointer;
    };
`
export const ItemMenu2 = styled.div `

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
    background: #F4F7F6;
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

export const ItemSettings = styled.a `
    color: black;
    padding: 10px;
    transition: all 0.2s;
    :hover {
        background: black;
        color: white;
    }
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WrapSettings = styled.div `
    z-index: 1000;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    background: white;
    width: 30vh;
    transition: all 0.5s;
    right: ${({enableSettings}) => enableSettings ? 0 : -600}px;
    top: 0;
`

export const WrapItemSettings = styled.div `
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`
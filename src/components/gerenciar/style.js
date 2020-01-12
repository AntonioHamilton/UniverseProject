import styled from 'styled-components';

export const Container = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    background: white;

`
export const Head = styled.div `
    box-shadow: 0px 5px 25px rgba(24,35,43,.1);
    display: flex;
    height: 10vh;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E6EAEA;
    background: white;
`

export const WrapInput = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    height: 100%;
    @media(max-width: 500px) {
        justify-content: start;
    }
`

export const Menu = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 10vh;
    background: white;
    @media(max-width: 500px) {
        width: 100px;
    }
    @media(max-width: 330px) {
        width: 40px;
    }
`
export const ItensMenu = styled.div `
    transition: all 0.5s;
    display: flex;
    position: fixed;
    left: ${({enableMenu}) => enableMenu ? 0 : -600}px;
    width: 200px;
    top: 10vh;
    height: 90vh;
    border-right: 1px solid #E6EAEA;
    border-top: 1px solid #E6EAEA;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    z-index: 50;
    background: white;
`

export const ItemMenu = styled.a `
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #E6EAEA;
    width: 200px;
    height: 15vh;
    background: white;
    :hover {
        background: radial-gradient(ellipse at bottom, #790029 0%, #090A0F 100%);
        color: white;
        cursor: Pointer;
    };

`

export const TextMenu = styled.h1 `

`

export const Lupa = styled.img `
    height: 33px;
    @media(max-width: 500px) {
        margin-left: 5px;
    }
`

export const Search = styled.input `
    width: 100%;
    height: 100%;
    padding: 0px 15px;
    border: 0;
    outline: none;
    font-size: 24px;
    background: white;
    @media(max-width: 500px) {
        position: absolute;
        top: ${props => props.activated ? 100 : -400}px;
        height: 40px;
    }
`

export const MenuUser = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserName = styled.h3`
    color: black;
    font-size: 16px;
    padding: 0px 10px;
`

export const User = styled.img `
    margin: 0px 20px;
    width: 50px;
    height: 45px;
    border-radius: 9999999px;
    background: black; 
    cursor: pointer;
`

export const ItemSettings = styled.a `
    color: black;
    padding: 10px;
    transition: all 0.2s;
    :hover {
        background: radial-gradient(ellipse at bottom, #790029 0%, #090A0F 100%);
        color: white;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
`

export const WrapSettings = styled.div `
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    height: 27vh;
    background: white;
    width: 40vh;
    transition: all 0.5s;
    right: ${({enableSettings}) => enableSettings ? 0 : -600}px;
    top: 0;
    border: 1px solid #E6EAEA;
    @media(max-width: 300px) {
        right: ${({enableSettings}) => enableSettings ? -65 : -600}px;
        justify-content: start;
    }
`

export const WrapItemSettings = styled.div `
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    height: 10vh;
    border-bottom: black;
`
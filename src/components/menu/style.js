import styled from 'styled-components';

export const Menu = styled.menu `
    z-index: 5;
    top: 0;
    position: sticky;
    display: flex;
    height: auto !important;
    justify-content: space-between;
    align-items: center;
    font-size: x-large;
    color: white;
    padding: 10px 50px;
    background: white;
    border-bottom-style: double;
    border-bottom-color: #E6EAEA;
    border-bottom-width: thin;
    @media (max-width: 600px) {
        border: none;
        position: fixed;
        display: flex;
        left: ${({enable}) => enable ? 0 : -600}px;
        flex-direction: column;
        width: 100%;
        height: 100% !important;
        transition: 1.0s linear;
        background-color: rgba(0, 0, 0, 0.8);
    }
`
export const Login = styled.a `
    color: black;
    text-decoration: none;
    margin: 0px 5px 0px 30px;
    font-size: 21px;
    font-family: 'Dosis', sans-serif;
    text-decoration: underline black;
    :hover {
        background: white;
        color: black;
        
        cursor: Pointer;
    };
    @media (max-width: 600px) {
        flex-direction:column;
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 0;
    } 
`

export const Link = styled.a `
    color: #0F131B;
    text-decoration: none;
    font-size: 21px;
    font-family: 'Dosis', sans-serif;
    padding: 0px 12px 0px 12px;
    :hover {
      
        text-decoration: underline black;
        cursor: Pointer;
    };
    @media (max-width: 600px) {
        display: flex;
        flex-direction:column;
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 0;
    } 
`

export const Nav = styled.ul `
    display: flex;
    padding: 0px;
    @media (max-width: 600px) {
        flex-direction:column;
        width: 100%;
        text-align: center;
        margin: 0;
        padding: 0;
    } 
`

export const HamburgerStyle = styled.div `
    display:none;
    @media (max-width: 600px) {
        display: flex;
        position: fixed;
        top: 0;
        left: 6px;
        padding: 10px;
        z-index: 41;
    }
`


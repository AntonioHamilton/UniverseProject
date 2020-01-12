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
    padding: 25px 50px;
    background: white;
    border-bottom-style: double;
    border-bottom-color: #ffffff;
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
    color: #0F131B;
    text-decoration: none;
    padding: 0px 12px 0px 12px;
    font-size: 21px;
    :hover {
     
        text-decoration: underline white;
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
    padding: 0px 12px 0px 12px;
    :hover {
      
        text-decoration: underline white;
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


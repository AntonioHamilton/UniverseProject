import styled from 'styled-components';

export const Menu = styled.menu `
    position: sticky;
    top: 0;
    display: flex;
    height: 4.94vh;
    justify-content: space-between;
    align-items: center;
    font-family: cursive;
    font-size: x-large;
    color: white;
    background-color:#000002;
    border-bottom-style: double;
    border-bottom-color: coral;
    border-bottom-width: thin;
`
export const Joke = styled.a `
    color: white;
    text-decoration: none;
    margin-right: 50px;

    :hover {
        color: orange;
        text-decoration: underline;
    }
`

export const Link = styled.a `
    color: white;
    text-decoration: none;

    :hover {
        color: orange;
        text-decoration: underline;
        cursor: Pointer;
    }
`

export const Nav = styled.ul `
    display: flex;
    padding: 10px; 
`


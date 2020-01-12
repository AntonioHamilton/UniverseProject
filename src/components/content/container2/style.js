import styled from 'styled-components';

export const Container2 = styled.div `
    display: flex;
    place-content: space-evenly;
    padding: 40px 0px 0px 0px;
    height: auto;
    @media(max-width: 460px){
        display: grid;
    }
`

export const Card = styled.div `
    align-self: center;
    text-align-last: center;
    background-color: transparent;
    width: 230px;
    color: #0F131B;
    @media(max-width: 460px){
        margin-bottom: 25px;
        padding: 40px 0px -10px 0px;
    }
    
`

export const Image = styled.img `
    border-radius: 100px;
    height: 50%;
    width: 50%;
`

export const Name = styled.p `
    margin-top: 5px;
`

export const Github = styled.a `
    margin-top: 10px;
    display: grid;
    text-decoration: none;
    color: #0F131B;
    :hover {
        text-decoration: underline
    } 
`

export const Linkedin = styled.a `
    display: grid; 
    text-decoration: none;
    color: #0F131B;
    :hover {
        text-decoration: underline
    } 
`
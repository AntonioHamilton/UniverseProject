import styled from 'styled-components';

export const Container2 = styled.div `
    display: flex;
    justify-content:center;
    padding: 0px 0px 0px 0px;
    height: auto;
    @media(max-width: 460px){
        display: grid;
    }
`

export const Card = styled.div `
    align-self: center;
    text-align-last: center;
    background-color: transparent;
    height: auto;
    width: 230px;
    color: #0F131B;
    margin-bottom: 30px;
    @media(max-width: 460px){
        padding: 0px 0px 0px 0px;
    }
    
`

export const Image = styled.img `
    border-radius: 100px;
    width: 50%;
`

export const Name = styled.p `
<<<<<<< HEAD
    margin-top: 5px;
    font-family: 'Dosis', sans-serif;
    font-weight: bold;
`

export const Github = styled.a `
    margin-top: 10px;
    display: grid;
    text-decoration: none;
    font-family: 'Dosis', sans-serif;
    color: #0F131B;
=======
    margin: 5px 0px;
    font-weight: bolder;
`

export const Github = styled.a `
    display: grid; 
    place-content: center;
    margin: 5px 0px;
`

export const GithubImage = styled.img `
    height: 50px;
    width: 50px;
>>>>>>> 85e00a4c393d4cc29c21a45d8d83a5aa1fbe766f
    :hover {
        background: white;
        border-radius: .7rem;
    }
 
`

export const Linkedin = styled.a `
    display: grid; 
<<<<<<< HEAD
    text-decoration: none;
    color: #0F131B;
    font-family: 'Dosis', sans-serif;
=======
    place-content: center;
    margin: 5px 0px;
`

export const LinkedinImage = styled.img `
    height: 50px;
    width: 50px;
>>>>>>> 85e00a4c393d4cc29c21a45d8d83a5aa1fbe766f
    :hover {
        background: white;
        border-radius: .7rem;
    }
`
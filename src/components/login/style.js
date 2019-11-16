import styled from 'styled-components';


export const ContainerLogin = styled.div `
    margin: 0px;
    top: 0;
    left: 0;
    display: flex;
    height: 48%;
    width: 30%;
    border-top: solid;
    border-bottom: solid;
    border-radius: 15px;
    border-color: #FFFFFF;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 700px) and (max-width: 2000px){
        height: 65%;
    }
    @media (min-width: 700px) and (max-width: 1000px){
        width: 40%;
    }
    @media (min-width: 376px) and (max-width:699px){
        width: 50%;
        height: 65%;
    }
    @media (min-width: 0px) and (max-width:375px) {
        width: 60%;
        height: 63%;
    }
    @media (min-height: 1366px){
        height: 33%;
    }
    @media (min-height: 1024px) and (max-height: 1365px){
        height: 38%;
    }
    @media (min-height: 900px) and (max-height: 1023px){
        height: 43%;
    }
    @media (min-height: 731px) and (max-height: 899px){
        height: 55%;
    }
    @media (max-height: 569px){
        height: 76%;
    }
    @media (max-height: 440px){
        height: 98%;
    }
    
`

export const Form = styled.form `
    display: flex;
    width: 100%;
    height: 50%;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`
export const Text = styled.p `
    padding: 0px 0px 40px 0px;
    font-size: 36px;
    color: white;
    font-family: 'Dosis', sans-serif;
    @media (min-width: 0px) and (max-width:384px) {
        font-size: 30px;
    }
    @media (max-height: 440px){
        font-size:30px;
        padding: 0px 0px 20px 0px;
    }
`

export const Usuario = styled.input `
    margin: 50px 0px 25x 0px;
    padding: 10px 5px;
    height: 10%;
    width: 80%;
    font-size: 14px;
    border: 0;
    font-family: 'Roboto', sans-serif;
`

export const Senha = styled.input `
    margin: 25px 0px 0px 0px;
    padding: 10px 5px;
    height: 10%;
    width: 80%;
    font-size: 14px;
    border: 0;
    font-family: 'Roboto', sans-serif;
`

export const ButtonLogin = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0px 0px 0px;   
    padding: 0px 5px;
    height: 30%;
    width: 80%;
    font-size: 16px;
    padding: 23px;
    background: #10151E;
    border: 0;
    :hover{
        background: #0F131B;
    }
`
export const TextButton = styled.a `
    margin: 0;
    padding: 0;
    border 0;
    text-decoration: none;
    color: white;
    font-family: 'Dosis', sans-serif;
    
`
export const NewUserText = styled.a `
    margin: 50px 0px 0px 0px;
    text-decoration: none;
    color: white;
    font-family: 'Dosis', sans-serif;
    
`

export const NewUser = styled.a `
    margin: 50px 0px 0px 0px;
    text-decoration: none;
    color: white;
    font-family: 'Dosis', sans-serif;

    :hover {
        text-decoration: underline;
        cursor: Pointer;
    }
`



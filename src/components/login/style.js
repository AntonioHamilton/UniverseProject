import styled from 'styled-components';




export const ContainerLogin = styled.div `
    margin: 0px;
    top: 0;
    left: 0;
    display: flex;
    flex-direction:column;
    height: 50vh;
    width: 40vh;
    border-top: solid;
    border-bottom: solid;
    border-radius: 15px;
    border-color: #04268A;
    box-shadow: 0px 10px 5px #888, 0px -10px 5px #888;
    justify-content: center;
    align-items: center;
`

export const Usuario = styled.input `
    margin: 20px 0px;
    height: 10%;
    width: 80%;
`

export const Senha = styled.input `
    margin: 20px 0px;
    height: 10%;
    width: 80%;
`

export const ButtonLogin = styled.button `
    margin: 20px 0px;
    height: 10%;
    width: 80%;
`
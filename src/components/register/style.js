import styled from 'styled-components'

export const ItemForm = styled.input `
    outline: none;
    margin: 5px;
    padding: 10px 10px;
    height: 10%;
    width: 80%;
    font-size: 14px;
    border: 1px solid black;
    font-family: 'Roboto', sans-serif;
    border-radius: 10px;
`
export const ItemInForm = styled.div `
    display: flex;
    align-items: center;
    color: antiquewhite;
`

export const Response = styled.p `
    background-color: ${({cor}) => cor === 200 ? "green" : "red"};
    border-radius: 3px;
    margin:20px 0px 10px 0px;
    color: white;
`

export const ButtonRegister = styled.button `
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 50px 0px 0px 0px;   
    height: 30%;
    width: 80%;
    font-size: 16px;
    padding: 18px;
    background: #10151E;
    border: 0;
    outline: none;
    :hover{
        background: #0F131B;
        box-shadow: 0px 1px 5px rgba(46, 229, 157, 0.4);
    }
`

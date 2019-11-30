import styled from 'styled-components'

export const ItemForm = styled.input `
    margin: 2px;
    padding: 10px 5px;
    height: 10%;
    width: 80%;
    font-size: 14px;
    border: 0;
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
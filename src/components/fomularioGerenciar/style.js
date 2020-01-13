import styled from 'styled-components';

export const Container = styled.div `
    height: 89.9vh;
    justify-content: center;
    align-items: center;
    display: flex;
    background: #F9F9FC;
    
    color: black;
    
`
export const FormTitle = styled.h1 `
    margin-bottom: 10px;
`

export const WrapForm = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vh;
    max-height: 70vh;
    
    padding: 40px 50px 50px 70px;
    background: #fff;
    
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    border-radius: .5rem;
    border: 1px solid #E8EBEB;
    box-shadow: -7px 7px 20px rgba(24,35,43,.1);
`

export const InputForm = styled.input `
    margin: 5px 0px;
    width: 65%;
    border-radius: .3rem;
    outline: none;
    border: 1px solid #ced4da;
    font-size: 14px;
    padding: 10px;
    background: #fff;
    color: #495057;
`
export const InputForm2 = styled.select `
    margin: 5px 0px;
    width: 45%;
    border-radius: .25rem;
    outline: none;
    border: 1px solid #ced4da;
    font-size: 15px;
    padding: 10px;
    background: #fff;
    color: #495057;
`

export const Button = styled.a `
    background: ${ props => props.backgroundColor };
    border-radius: .2rem;
    width: 100px;
    padding: 5px;
    margin: 10px 5px 0px 5px;
    border-color: #227dbf;
    
    cursor: pointer;
    display: flex;
    width: 80px;
    font-family: 'Dosis', sans-serif;
    justify-content: center; 
    :hover{
        background: ${ props => props.color };
    }
    :active {
        transform: translateY(2px);
    }
    color: white;
`

export const WrapButtons = styled.div `
    margin-top: 15px;
    display: flex;
`
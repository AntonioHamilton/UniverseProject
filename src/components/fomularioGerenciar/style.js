import styled from 'styled-components';

export const Container = styled.div `
    height: 89.9vh;
    justify-content: center;
    align-items: center;
    display: flex;
    background: #e53935;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #e35d5b, #e53935);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #e35d5b, #e53935); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: black;
`
export const FormTitle = styled.h1 `
    margin-bottom: 10px;
`

export const WrapForm = styled.div `
    display: flex;
    flex-direction: column;
    width: 50vh;
    height: 60vh;
    align-items: center;
    place-content: center;
`

export const InputForm = styled.input `
    margin: 5px;
    border-radius: 200px;
    outline: none;
    border: none;
    font-size: 20px;
    padding: 10px;
`

export const Button = styled.a `
    background: #2980B9;
    border-radius: 200px;
    width: 100px;
    padding: 5px;
    margin: 0px 5px;
    cursor: pointer;
    display: flex;
    width: 80px;
    justify-content: center;
    :active {
        transform: translateY(2px)
    }
    color: white;
`

export const WrapButtons = styled.div `
    margin-top: 10px;
    display: flex;
`
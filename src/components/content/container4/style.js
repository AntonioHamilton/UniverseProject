import styled from 'styled-components';

export const Container = styled.div `
    margin: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 70px 0px 0px 0px;
    height: auto;
    min-height: 50vh;
    @media (max-width: 450px) {
        height: auto;
    }
`

export const Title = styled.h2 `
    height: auto;
    color: #0F131B;
    width: 100%;
    text-align: center;


    padding: 0px 0px 90px 0px;
    font-family: 'Dosis', sans-serif;

    padding: 20px 0px 30px 0px;

    font-size: 41px;

`

export const Description = styled.p `
    color: #0F131B;
    width: 70%;
    height: auto;
    text-align: center;

    padding: 0px 0px 20px 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 19px;

`


export const WrapContacts = styled.div `
    display: flex;
    align-items: center;
    color: black;
    width: 286px;
    place-content: space-around;
`

export const Social = styled.img `
    height: 32px;
    width: 32px;
    cursor: pointer;
`

export const Icon = styled.img `
    height: 20px;
    width: 20px;
    margin-right: 5px;
`

export const Phone = styled.div `
    display: flex;
    margin: 4px 0px;
    width: 286px;
    align-items: self-start;
`

export const WrapContacts2 = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    width: 200px;
    padding: 10px 0px 0px 0px;
`
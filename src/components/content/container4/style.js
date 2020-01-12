import styled from 'styled-components';

export const Container = styled.div `
    margin: 15px;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 80px 0px 0px 0px;
    justify-content: space-around;
    height: 95vh;
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
    font-family: 'Roboto Slab', 'Open Sans', sans-serif;
    font-size: 52px;
`

export const Description = styled.p `
    color: #0F131B;
    width: 70%;
    height: auto;
    text-align: center;
    font-family: 'Roboto Slab', 'Open Sans', sans-serif;
    font-size: 25px;
`
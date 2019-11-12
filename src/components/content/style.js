import styled from 'styled-components';

export const Container = styled.section `
    height:100vh;
    background-color:#000002;
    border-bottom-style: double;
    border-bottom-color: coral;
    border-bottom-width: thin;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0px;
`

export const Title = styled.h2 `
    color: white;
    width: 30%;
    text-align: center;
    padding: 30px 0px 30px 0px;
    font-family: 'Roboto Slab', 'Open Sans', sans-serif;
    font-size: 52px;
`

export const Description = styled.p `
    color: white;
    width: 50%;
    text-align: center;
    font-family: 'Roboto Slab', 'Open Sans', sans-serif;
    font-size: 25px;
`
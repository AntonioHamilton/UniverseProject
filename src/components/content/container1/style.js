import styled from 'styled-components';

export const Container = styled.div `
    
    
    align-items: center;
    /*overflow: hidden;*/
    /*
    border-bottom-style: double;
    border-bottom-color: coral;
    border-bottom-width: thin;
    */
    display: flex;
    flex-direction: column;
    padding: 60px 0px 0px 0px;
    justify-content: space-around;
    height: 100vh;
    @media (max-width: 450px) {
        height: auto;
    }
`

export const Title = styled.h2 `
    height: auto;
    color: #0F131B;
    width: 100%;
    text-align: center;
    padding: 20px 0px 30px 0px;
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
import styled from 'styled-components';


export const Container = styled.div `
    background:black;
    display: flex;
    align-items:center;
    justify-content:center;
    font-size: 11px;
    padding: 0px 0px 0px 0px;
    height: 5vh;
    @media(max-width: 460px){
        display: grid;
    }
`
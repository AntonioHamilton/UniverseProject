import styled from 'styled-components';


export const Container = styled.div `
    background:#3f464f;
    display: flex;
    align-items:center;
    justify-content:center;
    border-top: 1px solid #2E343C;
    font-size: 11px;
    padding: 0px 0px 0px 0px;
    height: 5vh;
    @media(max-width: 460px){
        display: grid;
    }
`
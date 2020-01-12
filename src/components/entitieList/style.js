import styled from 'styled-components'

export const Container = styled.div `
    top: 0;
    left: 0;
    height: auto;
    min-height: 89.9vh;
    color: #000000;
    background: #F9F9FC;
    text-align: -webkit-center;
    @media(max-width: 850px) {
        margin-top: 50px;
        height: auto;
        width: auto;
    }
`

export const ContainerTitle = styled.h1 `
    padding: 20px 0px 0px 10px;
    font-size: 2rem;
`

export const ContainerPost = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 70vh);
    grid-template-rows: repeat(5, auto);
    grid-column-gap: 20px;
    grid-row-gap: 15px;
    align-items: center;
    justify-content: center;
    width: auto;
    top: 0;
    left: 0;
    height: auto;
    color: black;
    @media(max-width: 1220px) {
        grid-template-columns: repeat(1, 90vh);
        grid-template-rows: repeat(10, auto);
    }
    @media(max-width: 850px) {
        margin-top: 50px;
        height: auto;
        width: auto;
    }
    padding: 20px;
`

export const WrapPost = styled.div `
    word-wrap:break-word;
    background: #FFFFFF;
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: .7rem;
    box-shadow: -7px 7px 20px  rgba(24, 35, 43, .1);
`

export const PostImage = styled.img `
    height: 100px;
    width: 100px;
`

export const PostTitle = styled.h2 `

`

export const PostInfo = styled.p `

`

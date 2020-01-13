import styled from 'styled-components'

export const Container = styled.div `
    top: 0;
    left: 0;
    height: auto;
    min-height: 89.9vh;
    color: #000000;
    background: #F9F9FC;
    text-align: -webkit-center;
`

export const ContainerTitle = styled.h1 `
    padding: 20px 0px 0px 10px;
    font-size: 3rem;
    margin-bottom: 30px;
    font-family: 'Dosis', sans-serif;
`

export const ContainerPost = styled.div `
    display: grid;
    grid-template-columns: repeat(2, 70vh);
    grid-template-rows: repeat(5, auto);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    align-items: center;
    justify-content: center;
    font-family: 'Dosis', sans-serif;
    width: auto;
    top: 0;
    left: 0;
    height: auto;
    color: black;
    @media(max-width: 1250px) {
        grid-template-columns: repeat(1, 90vh);
        grid-template-rows: repeat(10, auto);
    }
    @media(max-width: 800px) {
        grid-template-columns: repeat(1, 100%);
    }
    padding: 10px;
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
    border-radius: .6rem;
    margin-bottom: 5px;
`

export const PostTitle = styled.h2 `
    margin-bottom: 7px;
    font-size: 2rem;
`

export const WrapInfo = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
`

export const WrapAllInfo = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 33%);
    grid-row-gap: 10px;
`

export const PostInfo = styled.p `
    margin-bottom: 5px;
`

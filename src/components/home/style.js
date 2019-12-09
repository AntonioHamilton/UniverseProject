import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    height: 100%;
    margin-top: 40px;
    @media(max-width: 850px) {
        margin-top: 50px;
        height: auto;
        width: auto;
    }
`

export const SlideShow = styled.div `
    display: flex;
    height: 100%;
    justify-content: center;
    @media (max-width: 850px) {
        margin-top: 20px;
        flex-direction: column;
        height: auto;
    }
`

export const SlideImg = styled.img `
    border-radius: 70px;
    position: relative;
    width: 70%;
    height: 85vh;
    left: 10%;
    @media (max-width: 1000px) {
        height: 70vh;
        width: 60%;
        left: 5%;
    }
    @media (max-width: 850px) {
        left: 0;
        height: 100%;
        width: 80%;
        display: flex;
        align-self: center;
    }
`

export const SlideInfo = styled.div `
    border-radius: 70px;
    position: relative;
    width: 30%;
    height: 80%;
    align-self: center;
    right: 10%;
    background-color: #FFFFFF;
    padding: 20px;
    text-align: -webkit-center;
    @media (max-width: 1000px) {
        height: 50vh;
        right: 5%;
        font-size: 16px;
        width: 70%;
        display: flex;
        flex-direction: column;
        align-self: center;
    }
    @media (max-width: 850px) {
        height: 60%;
        right: 0;
    }
`

export const SlideTitle = styled.h2 `
    text-align: center;
    margin-top: 20px;
    margin-bottom: 15px;
    border-bottom-style: solid;
    border-color: #b26c6c;
    border-width: thin;
    padding-bottom: 10px;
`

export const SlideText = styled.h3 `
    width: 90%;
    text-align: justify;
    align-self: center;
`
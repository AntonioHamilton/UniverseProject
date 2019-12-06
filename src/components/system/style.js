import styled from 'styled-components';

export const Header = styled.div `
    width: 100%;
    height: 50px;
    background-color: #C3E6F5;
`

export const Filter = styled.div `
    background-color: #C3E6F5;
    height: auto;
    padding: 7px 0px 7px 0px;
    display: flex;
    place-content: center;
    @media (max-width: 600px) {
        border-bottom: none;
        border-right-style: double;
        border-right-width: thin;
        border-right-color: black;
        width: 25%;
        height: -webkit-fill-available;
        position: sticky;
        top: 0;
    }
`

export const FilterDiv = styled.div `
    width: 75%;
    font-family: monospace;
    display: flex;
    place-content: space-evenly;
    @media (min-width: 600px) {
        align-self: center;
    }
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        height:auto;
    }
`

export const ItemFilter = styled.button `
    border: none;
    background-color: #c4c4c4;
    border-radius: 200px;
    width: 250px;
    height: 50px;
    font-size: 20px;
    :hover {
        cursor: pointer;
        color: black;
        text-decoration: underline;
    }
    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`

export const Content = styled.div `
    height: 200px;
    width: 200px;
    background-color: #6BFFDC;
    border-radius: 50px;
    margin-bottom: 50px;
    margin-top: 50px;
`

export const Img = styled.img `
    width: 130px;
    height: 130px;
    top: 200px;
    position: relative;
    top: -62px;
`

export const Container = styled.div `
    background-color: #C3E6F5;
    display: grid;
    margin-top: 90px;
    grid-template-columns: repeat(5, 20%);
    place-items: center;
    text-align: center;
`

export const Info = styled.p `
    margin-top: 5px;
    position: relative;
    top: -70px;
    font-size: 20px;
    font-family: 'Arsenal', sans-serif;
`
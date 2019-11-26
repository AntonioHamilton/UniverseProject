import styled from 'styled-components'

export const Container = styled.div`
    background-color: #01338b;
    display: flex;
    height: auto;
    padding-top: 20px;
    z-index: -1001;
    @media (max-width: 800px) {
        display: grid
    }
`
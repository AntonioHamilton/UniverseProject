import styled, { keyframes } from 'styled-components';

const multiple_box_shadow = ( n )  => {
  let value = `${Math.floor(Math.random() * 2000)}px ${Math.floor(Math.random() * 2000)}px  #FFF`;
  for(let i = 2; i <= n; i++){
    value = `${value}, ${Math.floor(Math.random() * 2000)}px  ${Math.floor(Math.random() * 2000)}px  #FFF`
  }
  return value;
};

const shadows = {
    small: multiple_box_shadow(700),
    medium: multiple_box_shadow(200),
    big: multiple_box_shadow(100)
};

const animStar = keyframes ` 
  from	{
    transform: translateY(-2500px)
  }
  to  {
    transform: translateY(0px)
  }
`;

export const Container = styled.div `
    align-items: center;
    height:100%;
    background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
    overflow: hidden;
    /*
    border-bottom-style: double;
    border-bottom-color: coral;
    border-bottom-width: thin;
    */
    display: flex;
    flex-direction: column;
    padding: 0;
    justify-content: center;
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
export const Stars = styled.div `
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadows.small};
    animation			: ${animStar} 50s linear infinite;

    &:after{
        content: " ";
        position: absolute;
        top:   ;
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow: ${shadows.small};
    }
`
export const Stars2 = styled.div `
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadows.medium};
    animation			: ${animStar} 100s linear infinite;

    &:after{
        content: " ";
        position: absolute;
        top: 2000px;
        width: 2px;
        height: 2px;
        background: transparent;
        box-shadow: ${shadows.medium};
    }
`

export const Stars3 = styled.div `
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${shadows.big};
    animation			: ${animStar} 150s linear infinite;

    &:after{
        content: " ";
        position: absolute;
        top: 2000px;
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: ${shadows.big};
    }
`

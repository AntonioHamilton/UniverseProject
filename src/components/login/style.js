import styled, { keyframes } from 'styled-components';

export const Container = styled.div `
    align-items: center;
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
    height: 100%;
`

export const ContainerLogin = styled.div `
    margin: 0px;
    top: 0;
    left: 0;
    display: flex;
    height: auto;
    width: 30%;
    border-top: solid;
    border-bottom: solid;
    border-radius: 15px;
    border-color: #FFFFFF;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    @media (max-width: 850px) {
        width: 40%;
    }
    @media (max-width: 650px) {
        width: auto;
    }          
`

export const Form = styled.form `
    display: flex;
    width: 100%;
    height: 50%;
    flex-direction:column;
    justify-content: center;
    align-items:center;
`
export const Text = styled.p `
    font-size: 36px;
    color: white;
    font-family: 'Dosis', sans-serif;
    @media (min-width: 0px) and (max-width:384px) {
        font-size: 30px;
    }
    @media (max-height: 440px){
        font-size:30px;
        padding: 0px 0px 20px 0px;
    }
`

export const Usuario = styled.input `
    outline: none;
    border-radius: 10px;
    margin: 50px 0px 25 0px;
    padding: 10px 5px;
    height: 10%;
    width: 80%;
    font-size: 14px;
    border: 0;
    font-family: 'Roboto', sans-serif;
`

export const Senha = styled.input `
    outline: none;
    border-radius: 10px;
    margin: 25px 0px 0px 0px;
    padding: 10px 5px;
    height: 10%;
    width: 80%;
    font-size: 14px;
    border: 0;
    font-family: 'Roboto', sans-serif;
`

export const ButtonLogin = styled.button `
    outline: none;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0px 0px 0px;   
    height: 30%;
    width: 80%;
    font-size: 16px;
    padding: 18px;
    background: #10151E;
    border: 0;
    :hover{
        background: #0F131B;
        box-shadow: 0px 1px 5px rgba(46, 229, 157, 0.4);
    }
`

export const TextButton = styled.a `
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    color: white;
    font-family: 'Dosis', sans-serif;
    
`
export const NewUserText = styled.a `
    margin: 50px 0px 0px 0px;
    text-decoration: none;
    color: white;
    font-family: 'Dosis', sans-serif;
    
`

export const NewUser = styled.a `
    margin: 50px 0px 0px 0px;
    text-decoration: none;
    color: white;
    font-family: 'Dosis', sans-serif;

    :hover {
        text-decoration: underline;
        cursor: Pointer;
    }
`

const multiple_box_shadow = n => {
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
  
  export const Stars = styled.div `
      width: 1px;
      height: 1px;
      background: transparent;
      box-shadow: ${shadows.small};
      animation: ${animStar} 50s linear infinite;
      &:after{
          content: " ";
          position: relative;
          top: 0px;
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
      animation: ${animStar} 100s linear infinite;
      &:after{
          content: " ";
          position: relative;
          top: 0px;
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
      animation: ${animStar} 150s linear infinite;
      &:after{
          content: " ";
          position: relative;
          top: 0px;
          width: 3px;
          height: 3px;
          background: transparent;
          box-shadow: ${shadows.big};
      }
  `
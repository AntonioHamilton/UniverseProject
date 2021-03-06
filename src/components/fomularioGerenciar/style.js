import styled from "styled-components";

export const Container = styled.div`
  height: 89.9vh;
  justify-content: center;
  align-items: center;
  display: flex;
  background: #f9f9fc;

  color: black;
  @media (max-width: 430px) {
    min-height: 100vh;
    height: auto;
  }
`;
export const FormTitle = styled.h1`
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
`;

export const WrapAllInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  margin: 5px 0px 5px 0px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const WrapInput = styled.div`
  width: 32.9vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vh;
  max-height: 70vh;

  padding: 40px 50px 50px 70px;
  background: #fff;

  align-items: center;
  font-family: "Open Sans", sans-serif;
  border-radius: 0.5rem;
  align-items: center;
  border-radius: 0.25rem;

  border: 1px solid #e8ebeb;
  box-shadow: -7px 7px 20px rgba(24, 35, 43, 0.1);
  @media (max-width: 700px) {
    max-height: 100%;
    height: auto;
  }
  @media (max-width: 430px) {
    padding: 10px 10px 10px 20px;
  }
  @media (max-width: 350px) {
    padding: 0;
  }
`;

export const InputForm = styled.input`
  margin: 5px 0px;
  width: 65%;
  border-radius: 0.3rem;
  outline: none;
  border: 1px solid #ced4da;
  font-size: 14px;
  padding: 10px;
  background: #fff;
  color: #495057;
`;
export const InputForm2 = styled.select`
  margin: 5px 0px;
  width: 100%;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid #ced4da;
  font-size: 15px;
  padding: 10px;
  background: #fff;
  color: #495057;
`;

export const Button = styled.a`
  background: ${props => props.backgroundColor};
  border-radius: 0.2rem;
  width: 100px;
  padding: 5px;
  margin: 10px 5px 0px 5px;
  border-color: #227dbf;

  cursor: pointer;
  display: flex;
  width: 80px;
  font-family: "Dosis", sans-serif;
  justify-content: center;
  :hover {
    background: ${props => props.color};
  }
  :active {
    transform: translateY(2px);
  }
  color: white;
`;

export const WrapButtons = styled.div`
  margin-top: 15px;
  display: flex;
  @media (max-width: 420px) {
    flex-direction: row;
  }
`;

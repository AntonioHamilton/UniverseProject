import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  ContainerLogin,
  Text,
  Form,
  Usuario,
  Senha,
  ButtonLogin,
  TextButton,
  NewUser,
  NewUserText
} from "./style";
import { api } from "../../services/api";
import { login, logout } from "../../services/auth";

export default class Login extends React.Component {
  state = {
    login: "",
    password: "",
    loading: false,
    errorMessage: false
  };

  handleChangeName = event => {
    this.setState({ login: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ loading: true });
    this.setState({ errorMessage: false });
    await api
      .post("/Login", {
        login: this.state.login,
        password: this.state.password
      })
      .then(result => {
        logout();
        const token = result.data.token;
        const user = result.data.user;
        window.localStorage.setItem("name", user.name);
        login(token);
        window.location.href = "/sistema";
      })
      .catch(err => {
        this.setState({ loading: false });
        this.setState({ errorMessage: true });
      });
  };

  render() {
    return (
      <ContainerLogin>
        <Form onSubmit={this.handleSubmit}>
          <a style={{ textDecoration: "none", marginBottom: "40px" }} href="/">
            <Text>UniverseProject</Text>
          </a>
          {this.state.errorMessage && (
            <p
              style={{
                color: "black",
                background: "#ffa091",
                marginTop: "-15px",
                marginBottom: "20px",
                padding: "5px"
              }}
            >
              Usuário ou senha estão incorretos
            </p>
          )}
          <Usuario
            type="text"
            placeholder="Login"
            onChange={this.handleChangeName}
          ></Usuario>
          <Senha
            type="password"
            placeholder="Senha"
            onChange={this.handleChangePassword}
          ></Senha>
          <ButtonLogin type="submit" disabled={this.state.loading}>
            {this.state.loading && (
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                style={{
                  color: "white",
                  marginRight: "10px"
                }}
              ></FontAwesomeIcon>
            )}
            <TextButton>Entrar</TextButton>
          </ButtonLogin>
          <NewUserText>
            Não possui conta?
            <NewUser href="/inscricao"> Inscreva-se</NewUser>
          </NewUserText>
        </Form>
      </ContainerLogin>
    );
  }
}

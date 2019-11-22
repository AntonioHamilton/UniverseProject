import React from 'react';
import {ContainerLogin, Text, Form ,Usuario, Senha, ButtonLogin, TextButton, NewUser, NewUserText} from './style';
import axios from 'axios';

export default class Login extends React.Component {

    state = {
        login:"",
        password: "",
        token: ""
    }

    handleChangeName = event => {
        this.setState({login: event.target.value, })
    }

    handleChangePassword = event => {
        this.setState({password: event.target.value, })
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('https://universe-project.herokuapp.com/Login', {login:this.state.login, password:this.state.password}).then((result)=>{
            const token = result.data.token;
            this.setState({token});
        }).catch((err)=>{
            console.log(err)
        })
    }

    render () {
        return (
            <ContainerLogin>
                <Form onSubmit={this.handleSubmit}>
                    <a style={{"text-decoration":"none"}} href="/"><Text>UniverseProject</Text></a>
                    <Usuario type="text" placeholder="Username" onChange={this.handleChangeName}></Usuario>
                    <Senha type="password" placeholder="Password" onChange={this.handleChangePassword}></Senha>
                    <ButtonLogin type="submit" >
                        <TextButton>login</TextButton>
                    </ButtonLogin>
                    <NewUserText>Não possui conta? 
                        <NewUser href="/inscricao"> Inscreva-se</NewUser>
                    </NewUserText>
                </Form>
            </ContainerLogin>
        )
    }
}
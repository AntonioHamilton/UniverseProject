import React from 'react';
import {ContainerLogin, Text, Form ,Usuario, Senha, ButtonLogin, TextButton, NewUser, NewUserText} from './style';
import {api} from '../../services/api';

export default class Login extends React.Component {

    state = {
        login:"",
        password: "",
    }

    handleChangeName = event => {
        this.setState({login: event.target.value, })
    }

    handleChangePassword = event => {
        this.setState({password: event.target.value, })
    }

    handleSubmit = event => {
        event.preventDefault();
        api.post('/Login', {login:this.state.login, password:this.state.password}).then((result) => {
            const token = result.data.token;
            const user = result.data.user;
            window.localStorage.setItem('name', user.name);
            window.localStorage.setItem('token', token);
            window.location.href = '/sistema'
        }).catch((err)=>{
            console.log(err)
        })
    }

    render () {
        return (
            <ContainerLogin>
                <Form onSubmit={this.handleSubmit}>
                    <a style={{"textDecoration":"none"}} href="/"><Text style={{padding: "0px 0px 40px 0px"}}>UniverseProject</Text></a>
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
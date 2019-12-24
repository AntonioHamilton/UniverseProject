import React from 'react'
import {Container, Stars, Stars2, Stars3, Text, Form, ContainerLogin as ContainerRegister, NewUser, NewUserText, TextButton} from '../login/style'
import {ItemForm, Response, ButtonRegister} from './style'
import axios from 'axios'

export default class RegisterPage extends React.Component {

    state = {
        login:"",
        name:"",
        email:"",
        password:"",
        type: "USER",
        check: true,
        disable: true,
        response: "",
        status: ""
    }

    handleChangeLogin = e => {
        this.setState({login: e.target.value})
    }

    handleChangeName = e => {
        this.setState({name: e.target.value})
    }

    handleChangeEmail = e => {
        this.setState({email: e.target.value})
    }

    handleChangePassword = e => {
        this.setState({password: e.target.value})
    }

    VerifyPassword = e => {
        const disable = !(this.state.password === e.target.value);
        this.setState ({ disable })
    }

    handleChangeAdmin = e => {
        this.setState({check: !this.state.check});
        this.setState({type: this.state.check ? "ADMIN" : "USER"})
    }

    handleSubmit = e => {
        e.preventDefault()

        axios.post('https://universe-project.herokuapp.com/user', {
            login:this.state.login, 
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        }).then((response)=>{
            this.setState({response: response.data});
            this.setState({status: response.status});
            window.location.href = '/login';
        }).catch(()=>{
            this.setState({response: "Esse usuário já foi criado!"});
            this.setState({status: 500});
        })
        
    }

    render () {
        return (
            <div style={{
                "height": "100%",
                "width": "100%",
                "display": "list-item",
                "position": "absolute"
                }}>
                <Container >
                    <ContainerRegister>
                        <Form onSubmit={this.handleSubmit}>
                            <a style={{"textDecoration":"none"}} href="/">
                                <Text>UniverseProject</Text>
                            </a>
                            <Response cor={this.state.status}>{this.state.response}</Response>
                            <ItemForm type="text" placeholder="Login" onChange={this.handleChangeLogin}/>
                            <ItemForm type="text" placeholder="Username" onChange={this.handleChangeName}/>
                            <ItemForm type="email" placeholder="E-mail" onChange={this.handleChangeEmail}/>
                            <ItemForm type="password" placeholder="Password" onChange={this.handleChangePassword}/>
                            <ItemForm type="password" placeholder="Verify your password" onChange={this.VerifyPassword}/>
                            <ButtonRegister style={{marginTop:"20px"}} disabled={this.state.disable} type="submit" >
                                <TextButton>Registrar</TextButton>
                            </ButtonRegister>
                            <NewUserText style={{marginTop:"20px"}}>Já possui conta? 
                                <NewUser href="/Login"> Logue agora</NewUser>
                            </NewUserText>
                        </Form>
                    </ContainerRegister>
                </Container>
                <Stars/>
                <Stars2/>
                <Stars3/>
            </div>
        )
    }
}
import React from 'react';
import {ContainerLogin, Text, Form ,Usuario, Senha, ButtonLogin, TextButton, NewUser, NewUserText} from './style';

export default class Login extends React.Component {
    render () {
        return (
            <ContainerLogin>
                <Form action="http://universe-project.herokuapp.com/Login" method="post">
                    <Text>UniverseProject</Text>
                    <Usuario type="text" name="login" placeholder="Username"></Usuario>
                    <Senha type="password" name="password" placeholder="Password"></Senha>
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
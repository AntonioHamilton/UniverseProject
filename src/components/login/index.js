import React from 'react';
import {ContainerLogin, Usuario, Senha, ButtonLogin} from './style';

export default class Login extends React.Component {
    render () {
        return (
            <ContainerLogin>
                <Usuario></Usuario>
                <Senha></Senha>
                <ButtonLogin></ButtonLogin>
            </ContainerLogin>
        )
    }
}
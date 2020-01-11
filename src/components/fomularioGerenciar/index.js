import React, {useState, useEffect} from 'react';
import {InputForm, WrapForm, Button, Container, FormTitle, WrapButtons} from './style'

const FormGerenciar = () => {

    const galaxia = {nome:'Galaxia', lista: ['Id', 'Nome', 'Quantidade de sistemas', 'Distância da Terra']}
    const planetas = {nome:'Planetas', lista:['Id', 'Nome', 'Tamanho', 'Massa', 'Gravidade', 'Complemento']}
  
    const [lista, setLista] = useState(planetas)


    return (
        <Container>
            <WrapForm>
                <FormTitle>{lista.nome}</FormTitle>
                {lista.lista.map((item, index) => {
                    return (
                        <InputForm name={`${item}`} placeholder={`${item}`} ></InputForm>
                    )
                })}
                <WrapButtons>
                    <Button>Adicionar</Button>
                    <Button>Modificar</Button>
                    <Button>Deletar</Button>
                </WrapButtons>
            </WrapForm>
        </Container>
    )
}

export default FormGerenciar;
import React, {useState, useEffect} from 'react';
import {InputForm, WrapForm, Button, Container, FormTitle, WrapButtons} from './style'

const FormGerenciar = ({ data, menu }) => {

    const universo = {
        galaxia: {nome:'Galáxia', lista: ['Nome', 'Quantidade de sistemas', 'Distância da Terra']},
        planeta: {nome:'Planeta', lista: ['Nome', 'Tamanho', 'Massa', 'Gravidade', 'Composição']},
        estrela: {nome: 'Estrela', lista: ['Idade', 'Distância da Terra', 'Gravidade']},
        sistema: {nome: 'Sistema Planetário', lista: ['Nome', 'Quantidade de Planetas', 'Quantidade de Estrelas', 'Idade do Sistema']},
        satelite: {nome: 'Satélite Natural', lista: ['Nome', 'Tamanho', 'Composição', 'Massa']},
        anaVermelha: {nome: 'Anã Vermelha', lista: ['Nome', 'Tamanho', 'Massa']},
        anaBranca: {nome: 'Anã Branca', lista: ['Nome', 'Tamanho', 'Massa']},
        estrelaBinaria: {nome: 'Estrela Binária', lista: ['Nome', 'Tamanho', 'Massa']},
        giganteAzul: {nome: 'Gigante Azul', lista: ['Nome', 'Tamanho', 'Massa']},
        giganteVermelha: {nome: 'Gigante Vermelha', lista: ['Nome', 'Tamanho', 'Massa', 'Morte'] }
    } 

    const [lista, setLista] = useState(universo['planeta'])

    useEffect(() => {
        setLista(universo[menu])
    }, [menu])

    return (
        <Container>
            <WrapForm>
                <FormTitle>{lista.nome}</FormTitle>
                {lista.lista.map((item, index) => (
                    <>
                        { item === 'Morte' ? 
                        <div style={{display:'flex', alignItems: 'center'}}>
                            <p1>Morte</p1>
                            <InputForm name={`${item}`} type='checkbox'/>
                        </div> 
                        : <InputForm name={`${item}`} placeholder={`${item}`}/>}
                    </>
                ))}
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
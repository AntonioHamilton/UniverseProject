import React, {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {Container, WrapPost, ContainerPost, ContainerTitle, PostImage, PostInfo, PostTitle} from './style.js'

const EntitieList = ({menu}) => {


    const universo = {
        galaxia: { lista: ['Nome', 'Quantidade de sistemas', 'Distância da Terra'], banco:['nome', 'quantidade_sistemas', 'distancia_terra']},
        planeta: { lista: ['Nome', 'Tamanho', 'Massa', 'Gravidade', 'Composição'], banco:['nome', 'tamanho', 'massa', 'gravidade', 'composicao']},
        estrela: {nome: 'Estrela', lista: ['Idade', 'Distância da Terra', 'Gravidade'], banco:['idade', 'distancia_terra', 'gravidade']},
        sistema: {nome: 'Sistema Planetário', lista: ['Nome', 'Quantidade de Planetas', 'Quantidade de Estrelas', 'Idade do Sistema'], banco:['nome', 'quantidade_planetas', 'quantidade_estrelas', 'idade']},
        satelite: {nome: 'Satélite Natural', lista: ['Nome', 'Tamanho', 'Composição', 'Massa'], banco:['nome', 'tamanho', 'composicao', 'massa']},
        anaVermelha: {nome: 'Anã Vermelha', lista: ['Nome', 'Tamanho', 'Massa'], banco:['nome', 'tamanho', 'massa']},
        anaBranca: {nome: 'Anã Branca', lista: ['Nome', 'Tamanho', 'Massa'], banco:['nome', 'tamanho', 'massa']},
        estrelaBinaria: {nome: 'Estrela Binária', lista: ['Nome', 'Tamanho', 'Massa'], banco:['nome', 'tamanho', 'massa']},
        giganteAzul: {nome: 'Gigante Azul', lista: ['Nome', 'Tamanho', 'Massa'], banco:['nome', 'tamanho', 'massa']},
        giganteVermelha: {nome: 'Gigante Vermelha', lista: ['Nome', 'Tamanho', 'Massa', 'Morte'], banco:['nome', 'tamanho', 'massa', 'morte']}
    } 

    const [posts, setPosts] = useState([])

    const Titles = {galaxia: 'Galáxias', sistema: 'Sistemas Planetários', planeta: 'Planetas', satelite: 'Satélites Naturais', estrela: 'Estrelas', anaVermelha: 'Anãs Vermelhas', anaBranca: 'Anãs Brancas', estrelaBinaria: 'Estrelas Binárias', giganteAzul: 'Gigantes Azuis', giganteVermelha: 'Gigantes Vermelhas'}

    const findByType = nome => {
        api.get(`/${nome}`)
        .then(response => {
            console.log(response.data);
            setPosts(response.data)
        }).catch(err => console.log(err))
    }

    useEffect(() => {
        findByType(menu)    
    }, [menu])

    return (
        <Container>
            <ContainerTitle>{Titles[menu]}</ContainerTitle>
            <ContainerPost>
                {posts.map((item, index, array) => (
                    <WrapPost key={index} >
                        <PostImage src={`${item.url_imagem}`} />
                        { menu === 'estrela' ? <PostTitle>{item.id}</PostTitle> : <PostTitle>{item.nome}</PostTitle>}
                        {universe[menu].map((item, index) => (
                            <PostInfo>item</PostInfo>
                        ))}       
                    </WrapPost>
                ))     
                }
            </ContainerPost>
        </Container>
    )
}

export default EntitieList;

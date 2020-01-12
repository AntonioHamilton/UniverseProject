import React, {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {Container, WrapPost, ContainerPost, ContainerTitle, PostImage, PostInfo, PostTitle, WrapAllInfo, WrapInfo} from './style.js'

const EntitieList = ({menu}) => {


    const universo = {
        galaxia: { lista: ['Quantidade de sistemas', 'Distância da Terra'], banco:['quantidade_sistemas', 'distancia_terra']},
        planeta: { lista: ['Tamanho', 'Massa', 'Gravidade', 'Composição'], banco:['tamanho', 'massa', 'gravidade', 'composicao']},
        estrela: { lista: ['Idade', 'Distância da Terra', 'Gravidade'], banco:['idade', 'distancia_terra', 'gravidade']},
        sistema: { lista: ['Quantidade de Planetas', 'Quantidade de Estrelas', 'Idade do Sistema'], banco:['quantidade_planetas', 'quantidade_estrelas', 'idade']},
        satelite: { lista: ['Tamanho', 'Composição', 'Massa'], banco:['tamanho', 'composicao', 'massa']},
        anaVermelha: { lista: ['Tamanho', 'Massa'], banco:['tamanho', 'massa']},
        anaBranca: { lista: ['Tamanho', 'Massa'], banco:['tamanho', 'massa']},
        estrelaBinaria: {lista: ['Tamanho', 'Massa'], banco:['tamanho', 'massa']},
        giganteAzul: { lista: ['Tamanho', 'Massa'], banco:['tamanho', 'massa']},
        giganteVermelha: { lista: ['Tamanho', 'Massa', 'Morte'], banco:['tamanho', 'massa', 'morte']}
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
                        <WrapAllInfo>
                            { universo[menu].lista.map((internItem, internIndex) => (
                                <WrapInfo key={internIndex}>
                                    <PostInfo style={{fontWeight: 'bold', fontSize: '17px'}}>{internItem}</PostInfo>
                                    <PostInfo>{item[universo[menu].banco[internIndex]]}</PostInfo>
                                </WrapInfo>
                            ))}       
                        </WrapAllInfo>
                    </WrapPost>
                ))     
                }
            </ContainerPost>
        </Container>
    )
}

export default EntitieList;

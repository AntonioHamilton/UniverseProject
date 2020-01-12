import React, {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {Container, WrapPost, ContainerPost, ContainerTitle, PostImage, PostInfo, PostTitle} from './style.js'

const EntitieList = ({menu}) => {

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
                        <PostInfo>estrela do sistema solar :)</PostInfo>       
                    </WrapPost>
                ))     
                }
            </ContainerPost>
        </Container>
    )
}

export default EntitieList;

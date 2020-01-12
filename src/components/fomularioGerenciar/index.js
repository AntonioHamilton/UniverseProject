import React, {useState, useEffect} from 'react';
import {api} from '../../services/api'
import {InputForm, WrapForm, Button, Container, FormTitle, WrapButtons} from './style'

const FormGerenciar = ({ data, menu }) => {

    const universo = {
        galaxia: {nome:'Galáxia', lista: ['Nome', 'Quantidade de sistemas', 'Distância da Terra'], banco:['nome', 'quantidade_sistemas', 'distancia_terra']},
        planeta: {nome:'Planeta', lista: ['Nome', 'Tamanho', 'Massa', 'Gravidade', 'Composição'], banco:['nome', 'tamanho', 'massa', 'gravidade', 'composicao']},
        estrela: {nome: 'Estrela', lista: ['Idade', 'Distância da Terra', 'Gravidade'], banco:['idade', 'distancia_terra', 'gravidade']},
        sistema: {nome: 'Sistema Planetário', lista: ['Nome', 'Quantidade de Planetas', 'Quantidade de Estrelas', 'Idade do Sistema'], bdName:['nome', 'quantidade_planetas', 'quantidade_estrelas', 'idade']},
        satelite: {nome: 'Satélite Natural', lista: ['Nome', 'Tamanho', 'Composição', 'Massa'], banco:['nome', 'tamanho', 'composicao', 'massa']},
        anaVermelha: {nome: 'Anã Vermelha', lista: ['Nome', 'Tamanho', 'Massa'], banco:['nome', 'tamanho', 'massa']},
        anaBranca: {nome: 'Anã Branca', lista: ['Nome', 'Tamanho', 'Massa'], banco:['nome', 'tamanho', 'massa']},
        estrelaBinaria: {nome: 'Estrela Binária', lista: ['Nome', 'Tamanho', 'Massa'], banco:['nome', 'tamanho', 'massa']},
        giganteAzul: {nome: 'Gigante Azul', lista: ['Nome', 'Tamanho', 'Massa'], banco:['nome', 'tamanho', 'massa']},
        giganteVermelha: {nome: 'Gigante Vermelha', lista: ['Nome', 'Tamanho', 'Massa', 'Morte'], banco:['nome', 'tamanho', 'massa', 'morte']}
    } 

    const [infoUniverso, setUniverso] = useState(universo['planeta']);
    const [checked, setChecked] = useState(true);
    const [form, setForm] = useState({});

    const handleChange = e => {
        const newForm = form;
        newForm[e.target.name] = e.target.value;
        setForm(newForm);
    }

    const handleCheckBox = e => {
        setChecked(!checked);
        const newForm = form;
        newForm[e.target.name] = checked;
        setForm(newForm);
    }

    const handleFormAdd = async e => {
        e.preventDefault();
        const response = await api.post(`/${menu}`, form);
        setForm({});
        await alert(`${response.data}`);
        console.log(response.status);
        await window.location.reload();
    }

    const handleFormMod = async e => {
        e.preventDefault();
        const response = await api.put(`/${menu}/${form.nome}`, form)
        setForm({});
        await alert(`${response.data}`);
        console.log(response.status);
        await window.location.reload();
    }

    const handleFormDel = async e => {
        e.preventDefault();
        const response = await api.delete(`/${menu}/${form.nome}`, form)
        setForm({})
        await alert(`${response.data}`);
        console.log(response.status);
        await window.location.reload();
    }

    useEffect(() => {
        setUniverso(universo[menu])
    }, [menu])

    return (
        <Container>
            <WrapForm>
                <FormTitle>{infoUniverso.nome}</FormTitle>
                {infoUniverso.lista.map((item, index) => (
                    <div key={index} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '18px',
                    marginTop: '5px'}}>
                        {infoUniverso.lista[index]}
                        { item === 'Morte' ? 
                        <div style={{display:'flex', alignItems: 'center'}}>
                            <p>Morte</p>
                            <InputForm onClick={handleCheckBox} name={`${infoUniverso.banco[index]}`} type='checkbox'/>
                        </div> 
                        : <InputForm onChange={handleChange} name={`${infoUniverso.banco[index]}`} placeholder={`${item}`}/>}
                    </div>
                ))}
                <WrapButtons>
                    <Button onClick={handleFormAdd}>Adicionar</Button>
                    <Button onClick={handleFormMod}>Modificar</Button>
                    <Button onClick={handleFormDel}>Deletar</Button>
                </WrapButtons>
            </WrapForm>
        </Container>
    )
}

export default FormGerenciar;
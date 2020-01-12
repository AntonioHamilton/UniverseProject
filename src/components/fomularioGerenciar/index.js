import React, {useState, useEffect} from 'react';
import {api} from '../../services/api'
import {InputForm, InputForm2, WrapForm, Button, Container, FormTitle, WrapButtons} from './style'

const FormGerenciar = ({ data, menu }) => {

    const universo = {
        galaxia: {nome:'Galáxia', lista: ['Nome','Quantidade de sistemas', 'Distância da Terra', 'Url da imagem'], banco:['nome', 'quantidade_sistemas', 'distancia_terra', 'url_imagem']},
        planeta: {nome:'Planeta', lista: ['Nome', 'Tamanho', 'Massa', 'Gravidade', 'Composição', 'Url da imagem'], banco:['nome', 'tamanho', 'massa', 'gravidade', 'composicao', 'url_imagem']},
        estrela: {nome: 'Estrela', lista: ['ID', 'Idade', 'Distância da Terra', 'Gravidade', 'Url da imagem'], banco:['id', 'idade', 'distancia_terra', 'gravidade', 'url_imagem']},
        sistema: {nome: 'Sistema Planetário', lista: ['Nome', 'Quantidade de Planetas', 'Quantidade de Estrelas', 'Idade do Sistema', 'Url da imagem'], banco:['nome', 'quantidade_planetas', 'quantidade_estrelas', 'idade', 'url_imagem']},
        satelite: {nome: 'Satélite Natural', lista: ['Nome', 'Tamanho', 'Composição', 'Massa', 'Url da imagem'], banco:['nome', 'tamanho', 'composicao', 'massa', 'url_imagem']},
        anaVermelha: {nome: 'Anã Vermelha', lista: ['Nome', 'Tamanho', 'Massa', 'Url da imagem'], banco:['nome', 'tamanho', 'massa', 'url_imagem']},
        anaBranca: {nome: 'Anã Branca', lista: ['Nome', 'Tamanho', 'Massa', 'Url da imagem'], banco:['nome', 'tamanho', 'massa', 'url_imagem']},
        estrelaBinaria: {nome: 'Estrela Binária', lista: ['Nome', 'Tamanho', 'Massa', 'Url da imagem'], banco:['nome','tamanho', 'massa', 'url_imagem']},
        giganteAzul: {nome: 'Gigante Azul', lista: ['Nome', 'Tamanho', 'Massa', 'Url da imagem'], banco:['nome', 'tamanho', 'massa', 'url_imagem']},
        giganteVermelha: {nome: 'Gigante Vermelha', lista: ['Nome', 'Tamanho', 'Massa', 'Url da imagem', 'Morte'], banco:['nome', 'tamanho', 'massa', 'url_imagem', 'morte']}
    } 

    const [infoUniverso, setUniverso] = useState(universo['galaxia']);
    const [checked, setChecked] = useState(true);
    const [form, setForm] = useState({});

    const handleChange = e => {
        const newForm = form;
        newForm[e.target.name] = e.target.value;
        setForm(newForm);
    }

    const handleCheckBox = e => {
        const newForm = form;
        if (e.target.value === 'Não'){
            setChecked(true)        
        }
        else{
            setChecked(false)
        }
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
                <FormTitle style={{padding: '0px 0px 8px 0px'}}>{infoUniverso.nome}</FormTitle>
                {infoUniverso.lista.map((item, index) => (
                    <div key={index} style={{display: 'flex', width: '100%' ,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', fontSize: '16px',
                    margin: '5px 0px 5px 0px'}}>
                        {infoUniverso.lista[index]}
                        { item === 'Morte' ? 
                        <div style={{width: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <InputForm2 onChange={handleCheckBox} name={`${infoUniverso.banco[index]}`}>
                                <option value="não">Não</option>
                                <option value="sim">Sim</option>  
                            </InputForm2>
                        </div> 
                        : <InputForm onChange={handleChange} name={`${infoUniverso.banco[index]}`} placeholder={`${item}`}/>}
                    </div>
                ))}
                <WrapButtons>
                    <Button color='#0c8940' backgroundColor='#2ecc71' onClick={handleFormAdd}>Adicionar</Button>
                    <Button color='#1C689F' backgroundColor='#227dbf' onClick={handleFormMod}>Modificar</Button>
                    <Button color='#E12E1C' backgroundColor='#e74c3c' onClick={handleFormDel}>Deletar</Button>
                </WrapButtons>
            </WrapForm>
        </Container>
    )
}

export default FormGerenciar;
import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import {
  InputForm,
  InputForm2,
  WrapForm,
  Button,
  Container,
  FormTitle,
  WrapButtons,
  WrapInput,
  WrapAllInput
} from "./style";

const FormGerenciar = ({ data, menu }) => {
  const universo = {
    galaxia: {
      nome: "Galáxia",
      lista: [
        "Nome",
        "Quantidade de sistemas",
        "Distância da Terra",
        "Url da imagem"
      ],
      banco: ["nome", "quantidade_sistemas", "distancia_terra", "url_imagem"]
    },
    planeta: {
      nome: "Planeta",
      lista: [
        "Nome",
        "Tamanho",
        "Massa",
        "Gravidade",
        "Composição",
        "Url da imagem",
        "Sistema o qual pertence",
        "Estrela o qual orbita: (separado por ;)"
      ],
      banco: [
        "nome",
        "tamanho",
        "massa",
        "gravidade",
        "composicao",
        "url_imagem",
        "sistema",
        "orbita"
      ]
    },
    estrela: {
      nome: "Estrela",
      lista: [
        "Url da imagem",
        "ID",
        "Idade",
        "Distância da Terra",
        "Sistema o qual pertence",
        "Tipo"
      ],
      banco: [
        "url_imagem",
        "id",
        "idade",
        "distancia_terra",
        "sistema",
        "orbitada",
        "tipo"
      ]
    },
    sistema: {
      nome: "Sistema Planetário",
      lista: [
        "Nome",
        "Quantidade de Planetas",
        "Quantidade de Estrelas",
        "Idade do Sistema",
        "Url da imagem",
        "Galaxia o qual pertence"
      ],
      banco: [
        "nome",
        "quantidade_planetas",
        "quantidade_estrelas",
        "idade",
        "url_imagem",
        "galaxia"
      ]
    },
    satelite: {
      nome: "Satélite Natural",
      lista: [
        "Nome",
        "Tamanho",
        "Composição",
        "Massa",
        "Url da imagem",
        "O que ele orbita",
        "Tipo de Orbita"
      ],
      banco: [
        "nome",
        "tamanho",
        "composicao",
        "massa",
        "url_imagem",
        "orbita",
        "tipoOrbita"
      ]
    },
    giganteVermelha: {
      nome: "Gigante Vermelha",
      lista: ["Nome", "Tamanho", "Massa", "Url da imagem", "Morte"],
      banco: ["nome", "tamanho", "massa", "url_imagem", "morte"]
    }
  };

  const [infoUniverso, setUniverso] = useState(universo["galaxia"]);
  const [checked, setChecked] = useState(true);
  const [form, setForm] = useState({});

  const handleChange = e => {
    const newForm = form;
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  };

  const handleNewChange = e => {
    let valor = e.target.value;
    valor = valor.split(";");
    const newForm = form;
    newForm[e.target.name] = valor;
    setForm(newForm);
  };

  const handleCheckBox = e => {
    const newForm = form;
    if (e.target.value === "Não") {
      setChecked(true);
    } else {
      setChecked(false);
    }
    newForm[e.target.name] = checked;
    setForm(newForm);
  };

  const handleSelectForm = e => {
    const newForm = form;
    newForm[e.target.name] = e.target.value;
    setForm(newForm);
  };

  const handleFormAdd = async e => {
    e.preventDefault();
    const response = await api.post(`/${menu}`, form);
    setForm({});
    await alert(`${response.data}`);
    await window.location.reload();
  };

  const handleFormMod = async e => {
    e.preventDefault();
    const response = await api.put(`/${menu}/${form.nome}`, form);
    setForm({});
    await alert(`${response.data}`);
    await window.location.reload();
  };

  const handleFormDel = async e => {
    e.preventDefault();
    const response = await api.delete(`/${menu}/${form.nome}`, form);
    setForm({});
    await alert(`${response.data}`);
    await window.location.reload();
  };

  let changeUniverse = menu => {
    setUniverso(universo[menu]);
  };

  useEffect(() => {
    changeUniverse(menu);
  }, [menu]);

  return (
    <Container>
      <WrapForm>
        <FormTitle style={{ padding: "0px 0px 8px 0px" }}>
          {infoUniverso.nome}
        </FormTitle>
        {infoUniverso.lista.map((item, index) => (
          <WrapAllInput key={index}>
            {infoUniverso.lista[index]}
            {item === "Morte" ? (
              <WrapInput>
                <InputForm2
                  onChange={handleCheckBox}
                  name={`${infoUniverso.banco[index]}`}
                >
                  <option value="não">Não</option>
                  <option value="sim">Sim</option>
                </InputForm2>
              </WrapInput>
            ) : item === "Tipo" ? (
              <WrapInput>
                <InputForm2
                  onChange={handleSelectForm}
                  name={`${infoUniverso.banco[index]}`}
                >
                  <option value="Anã Vermelha">Anã Vermelha</option>
                  <option value="Anã Branca">Anã Branca</option>
                  <option value="Gigante Azul">Gigante Azul</option>
                  <option value="Estrela Binária">Estrela Binária</option>
                </InputForm2>
              </WrapInput>
            ) : item === "Tipo de Orbita" ? (
              <WrapInput>
                <InputForm2
                  onChange={handleSelectForm}
                  name={`${infoUniverso.banco[index]}`}
                >
                  <option value="estrela">estrela</option>
                  <option value="planeta">planeta</option>
                </InputForm2>
              </WrapInput>
            ) : infoUniverso.nome === "Planeta" &&
              infoUniverso.banco[index] === "orbita" ? (
              <InputForm
                onChange={handleNewChange}
                name={`${infoUniverso.banco[index]}`}
                placeholder={`${item}`}
              />
            ) : (
              <InputForm
                onChange={handleChange}
                name={`${infoUniverso.banco[index]}`}
                placeholder={`${item}`}
              />
            )}
          </WrapAllInput>
        ))}
        <WrapButtons>
          <Button
            color="#0c8940"
            backgroundColor="#2ecc71"
            onClick={handleFormAdd}
          >
            Adicionar
          </Button>
          <Button
            color="#1C689F"
            backgroundColor="#227dbf"
            onClick={handleFormMod}
          >
            Modificar
          </Button>
          <Button
            color="#E12E1C"
            backgroundColor="#e74c3c"
            onClick={handleFormDel}
          >
            Deletar
          </Button>
        </WrapButtons>
      </WrapForm>
    </Container>
  );
};

export default FormGerenciar;

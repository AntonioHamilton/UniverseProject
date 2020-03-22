import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import Lottie from "react-lottie";
import {
  Container,
  WrapPost,
  ContainerPost,
  ContainerTitle,
  PostImage,
  PostInfo,
  PostTitle,
  WrapAllInfo,
  WrapInfo,
  AnimationWrap,
  WrapAnimation
} from "./style.js";
import Pig from "../../assets/animations/pork-dance.json";

const EntitieList = ({ menu, search }) => {
  const pig = {
    loop: true,
    autoplay: true,
    animationData: Pig,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const universo = {
    galaxia: {
      lista: [
        "Quantidade de sistemas",
        "Distância da Terra",
        "Sistemas pertencentes a galáxia"
      ],
      banco: ["quantidade_sistemas", "distancia_terra", "sistemas"]
    },
    planeta: {
      lista: [
        "Tamanho",
        "Massa",
        "Gravidade",
        "Composição",
        "Sistema a qual pertence",
        "Orbita",
        "Orbitado por"
      ],
      banco: [
        "tamanho",
        "massa",
        "gravidade",
        "composicao",
        "sistema",
        "orbita",
        "orbitado"
      ]
    },
    estrela: {
      lista: [
        "Idade",
        "Distância da Terra",
        "Sistema a qual pertence",
        "Orbitada por",
        "Tipo de estrela"
      ],
      banco: ["idade", "distancia_terra", "sistema", "orbitada", "tipo"]
    },
    sistema: {
      lista: [
        "Quantidade de Planetas",
        "Quantidade de Estrelas",
        "Idade do Sistema",
        "Galaxia o qual pertence",
        "Planetas que estão no sistema",
        "Estrelas que estão no sistema"
      ],
      banco: [
        "quantidade_planetas",
        "quantidade_estrelas",
        "idade",
        "galaxia",
        "planetas",
        "estrelas"
      ]
    },
    satelite: {
      lista: [
        "Tamanho",
        "Composição",
        "Massa",
        "este satélite Orbita",
        "Ele orbita uma"
      ],
      banco: ["tamanho", "composicao", "massa", "orbita", "tipoOrbita"]
    },
    giganteVermelha: {
      lista: ["Tamanho", "Massa", "Morte"],
      banco: ["tamanho", "massa", "morte"]
    },
    buracoNegro: {
      lista: ["Tamanho", "Massa"],
      banco: ["tamanho", "massa"]
    }
  };

  const [posts, setPosts] = useState([]);
  const [activateAnimation, setActivateAnimation] = useState(false);

  const Titles = {
    galaxia: "Galáxias",
    sistema: "Sistemas Planetários",
    planeta: "Planetas",
    satelite: "Satélites Naturais",
    estrela: "Estrelas",
    anaVermelha: "Anãs Vermelhas",
    anaBranca: "Anãs Brancas",
    estrelaBinaria: "Estrelas Binárias",
    giganteAzul: "Gigantes Azuis",
    giganteVermelha: "Gigantes Vermelhas"
  };

  const findByType = nome => {
    api
      .get(`/${nome}`)
      .then(response => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch(err => console.log(err));
  };

  const activatedAnim = search => {
    if (
      search === "banco de dados é top" ||
      search === "dcomp fantástico" ||
      search === "jornal nacional" ||
      search === "willian boner 2012" ||
      search === "SofTeam" ||
      search === "softeam"
    ) {
      setActivateAnimation(true);
    } else {
      setActivateAnimation(false);
    }
  };

  useEffect(() => {
    findByType(menu);
    activatedAnim(search);
  }, [menu, search]);

  return (
    <Container>
      <ContainerTitle>{Titles[menu]}</ContainerTitle>
      <AnimationWrap display={activateAnimation}>
        <WrapAnimation
          direction="right"
          style={{ width: "30%", minWidth: "300px" }}
          scrollamount="12"
        >
          <Lottie
            options={pig}
            height={300}
            width={300}
            isStopped={false}
            isPaused={false}
          />
        </WrapAnimation>
      </AnimationWrap>
      <ContainerPost>
        {posts.map((item, index, array) => (
          <WrapPost key={index}>
            <PostImage src={`${item.url_imagem}`} />
            {menu === "estrela" ? (
              <PostTitle>{item.id}</PostTitle>
            ) : (
              <PostTitle>{item.nome}</PostTitle>
            )}
            <WrapAllInfo>
              {universo[menu].lista.map((internItem, internIndex) => (
                <WrapInfo key={internIndex}>
                  <PostInfo style={{ fontWeight: "bold", fontSize: "17px" }}>
                    {internItem}
                  </PostInfo>
                  {typeof item[universo[menu].banco[internIndex]] ===
                  "object" ? (
                    <PostInfo>
                      {item[universo[menu].banco[internIndex]].join(", ")}
                    </PostInfo>
                  ) : (
                    <PostInfo>
                      {item[universo[menu].banco[internIndex]]}
                    </PostInfo>
                  )}
                </WrapInfo>
              ))}
            </WrapAllInfo>
          </WrapPost>
        ))}
      </ContainerPost>
    </Container>
  );
};

export default EntitieList;

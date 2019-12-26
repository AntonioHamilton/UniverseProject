import React from 'react';
import { Container } from './style';
import { Slide } from 'react-slideshow-image'
import {SlideShow, SlideInfo, SlideImg, SlideTitle, SlideText} from './style'
import img from '../../assets/images/marte.png'




const PlanetSlider = () => {

    const properties = {
        duration: 1000000000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex, newIndex) => {
            console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    }
    
    const SlideCss = {
        width: '100%',
        alignSelf: 'center',
        height: 'auto',
    }
    /*
    const slides = {
        galaxia:{image: img, titulo:"Galáxia" , resumo:"Uma galáxia é um grande sistema, gravitacionalmente ligado, que consiste de estrelas, remanescentes de estrelas, um meio interestelar de gás e poeira, e um importante mas insuficientemente conhecido componente apelidado de matéria escura."},
        sistemas_planetarios:{image: img, titulo:"Sistemas planetários" , resumo:"Um sistema planetário consiste numa formação de objetos não estelares que orbitam uma estrela, tal como planetas, satélites naturais, asteroides, meteoros, cometas e poeira cósmica. Desde 27 de agosto de 2019, existem 4109 exoplanetas em 3059 sistemas descobertos, com 667 sistemas tendo mais de um planeta. "},
        planetas:{image: img, titulo:"Planetas" , resumo:"Um planeta é um corpo celeste que orbita uma estrela ou um remanescente de estrela, com massa suficiente para se tornar esférico pela sua própria gravidade, mas não ao ponto de causar fusão termonuclear, e que tenha limpo de planetesimais a sua região vizinha."},
        satelites_naturais:{image: img, titulo:"Satélites naturais" , resumo:"Um satélite natural é um corpo celeste que orbita em torno de um planeta ou outro corpo maior. Dessa forma, o termo satélite natural poderia se referir a planetas anões orbitando a uma estrela, ou até uma galáxia anã orbitando uma galáxia maior."},
        ana_vermelha:{image: img, titulo:"Anã vermelha" , resumo:"Uma estrela anã-vermelha, de acordo com o Diagrama de Hertzsprung-Russell é uma estrela pequena e relativamente fria da sequência principal. O seu tipo espectral pode ser K ou M. As anãs-vermelhas constituem a vasta maioria das estrelas e sua massa é menor que a metade da massa do Sol."},
        ana_branca:{image: img, titulo:"Anã branca" , resumo:"Em astronomia, uma anã branca é um remanescente estelar composto principalmente por matéria eletronicamente degenerada. Uma anã branca é altamente densa: sua massa é comparável com a Sol, enquanto seu volume é comparável com o volume da Terra."},
        estrela_binaria:{image: img, titulo:"Estrela binária" , resumo:"Uma estrela binária é um sistema estelar que consiste de duas estrelas orbitando um baricentro comum. A estrela mais brilhante é chamada de primária, enquanto a estrela menos brilhante é chamada de estrela companheira ou secundária."},
        gigante_azul:{image: img, titulo:"Gigante azul" , resumo:"Em astronomia, uma estrela Gigante azul é uma estrela pesada, com massa maior que 18 vezes a massa do Sol, e muito quente e brilhante de tipo espectral O ou B. No Diagrama de Hertzsprung-Russell, Gigantes azuis são encontradas no canto superior esquerdo graças a sua luminosidade."},
        gigante_vermelha:{image: img, titulo:"Gigante vermelha" , resumo:"Uma gigante vermelha é uma estrela gigante luminosa de massa pequena ou intermediária, numa fase avançada da evolução estelar. A atmosfera exterior é inflada e tênue, fazendo com que o raio seja imenso e a temperatura superficial seja baixa."}
    }
    */
   const slides = [
    {image: img, titulo:"Galáxia" , resumo:"Uma galáxia é um grande sistema, gravitacionalmente ligado, que consiste de estrelas, remanescentes de estrelas, um meio interestelar de gás e poeira, e um importante mas insuficientemente conhecido componente apelidado de matéria escura."},
   ]
    return (
    <Container style={{marginTop: '0px'}}>
        <Slide {...properties} style={SlideCss}>
            {slides.map((item, index)=>(
                <SlideShow className="each-slide" key={index} prop1={item.image}>
                    <SlideImg src={item.image}/>
                    <SlideInfo>
                        <SlideTitle>{item.titulo}</SlideTitle>
                        <SlideText>{item.resumo}</SlideText>
                    </SlideInfo>
                </SlideShow>
            ))}
            
        </Slide>
    </Container>
    )
}

export default PlanetSlider;
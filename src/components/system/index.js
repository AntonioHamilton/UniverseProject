import React, {Component} from 'react'
import {Header, Filter, ItemFilter, FilterDiv, Content, Img, Container, Info, Logo, Person} from './style'
import img from '../../assets/images/planeta.png'

export default class system extends Component {

    state = {
        show: [],
        person: [{username:'tonho', login:'1'}]
    }

    showAll = () => {
        const show = [
            {image: img, name:"planet1",type:"planeta"},
            {image: img, name:"planet2",type:"planeta"},
            {image: img, name:"planet3",type:"planeta"},
            {image: img, name:"planet4",type:"planeta"},
            {image: img, name:"planet5",type:"planeta"},
            {image: img, name:"planet1",type:"planeta"},
            {image: img, name:"planet2",type:"planeta"},
            {image: img, name:"planet3",type:"planeta"},
            {image: img, name:"planet4",type:"planeta"},
            {image: img, name:"planet5",type:"planeta"},
        ]
        this.setState({show})
    }

    render () {

        const login = '1';

        return (
            <div style={{backgroundColor: "#C3E6F5"}}>
                <link href="https://fonts.googleapis.com/css?family=Arsenal&display=swap" rel="stylesheet"></link>
                <Header>
                    <Logo>
                        Universe Project
                    </Logo>
                    <Person>
                        { this.state.person.map((item, index, arr) => 
                            {
                                if (item.login === login) {
                                    return (item.username)
                                }
                            })
                        }
                    </Person>
                </Header>
                <Filter>
                    <FilterDiv>
                        <ItemFilter onClick={this.showAll}>Todos</ItemFilter>
                        <ItemFilter>Galáxias</ItemFilter>
                        <ItemFilter>Estrelas</ItemFilter>
                        <ItemFilter>Planetas</ItemFilter>
                        <ItemFilter>Luas</ItemFilter>
                    </FilterDiv>
                </Filter>
                <Container>
                    {this.state.show.map((item, index, arr)=>(
                        <Content key={index}>
                            <Img src={item.image}/>
                            <Info>{item.name}</Info>
                            <Info>{item.type}</Info>
                            <Info>Info</Info>
                            <Info>tem luas</Info>
                        </Content>
                    ))}
                </Container>
            </div>
        )
    }
}
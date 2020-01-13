import React, {Component} from 'react';
import {Card, Container2, Image, Name, Github, Linkedin, GithubImage, LinkedinImage} from './style';
import {Container, Title, Description} from '../container1/style';
import img1 from '../../../assets/images/antonio.png';
import img2 from '../../../assets/images/yves.png';

export default class Content2 extends Component {
    state = {
        card: [[
            {image:  img1 },
            {name: 'Antonio Hamilton' },
            {github: 'https://github.com/AntonioHamilton' } ,
            {linkedin: 'https://www.linkedin.com/in/antonio-hamilton-santos-freitas-60a50617a' }
        ], [
            {image: img2 },
            {name: 'Yves Bastos' },
            {github: 'https://github.com/bastosy' } ,
            {linkedin: 'https://www.linkedin.com/in/yves-bastos-aaa92116a/' }
        ]]        
    }

    render () {
        return (
            <Container 
            style={{
                padding: '0px 0px 30px 0px' ,
                justifyContent: 'center', 
                height: 'auto', 
                flexDirection: 'column', 
                background: '#45CDFF',  /* fallback for old browsers */
                }
            } id={this.props.id}>
                <Title style={{padding: '20px 0px 40px 0px'}}>{this.props.title}</Title>
                <Container2>    
                    {this.state.card.map((item)=>{
                        console.log(item)
                        return (
                            <Card>
                                <Image src={item[0].image} />
                                <Name>{item[1].name}</Name>
                                <Github href={item[2].github}><GithubImage src="https://cdn1.iconfinder.com/data/icons/social-media-vol-1-1/24/_github-512.png"></GithubImage></Github>
                                <Linkedin href={item[3].linkedin}><LinkedinImage src="https://icons-for-free.com/iconfiles/png/512/linkedin+icon-1320168276873005114.png"/></Linkedin>
                            </Card>
                        )}
                    )}
                </Container2>
                <Description>{this.props.description}</Description>
            </Container>
        )
    }
}
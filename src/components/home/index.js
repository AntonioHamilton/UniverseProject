import React from 'react';
import './style.css';

export default class Apresentation extends React.Component {
    render () {
        return (
            <section id="home">
                <img src={this.props.name} id="image"/>
            </section>
        )
    }
}


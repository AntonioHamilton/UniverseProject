import React from 'react';
import './style.css';

export default class Text extends React.Component {
    render () {
        return (
            <section id={this.props.id} className="container">
                <h2 id="title">{this.props.title}</h2>
                <p id="description">{this.props.description}</p>
            </section>
        )
    }
}
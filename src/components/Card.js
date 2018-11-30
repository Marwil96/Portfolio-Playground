import React, { Component } from 'react';
import '../App.css';

class Card extends Component {
  render() {
   var data = this.props.data;
   var shadow = this.props.shadow;
    return (
     <a className="card" style={{marginTop:data.margin}} href={data.url}>
        <h2>{data.title} </h2>
        <h3>{data.subHeader} </h3>
        <h4>Visit {data.medium} </h4>
      </a>
    );
  }
}

export default Card;

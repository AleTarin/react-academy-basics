import React from 'react';

const CardFigure = props => {
  return (
      <figure className="card__figure">
        <img className="card__figure__img" alt={props.title} src={props.img}></img>
      </figure>
  );
}

export default CardFigure;
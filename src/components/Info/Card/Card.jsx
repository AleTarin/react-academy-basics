import React from 'react';
import CardFigure from './CardFigure';
import CardContent from './CardContent';

// Functional Component with name as prop
const Card = props => {
  const { title, img, list, src } = props.article;
  return (
    <article className="card">
      <CardFigure title={title} img={img} src={src} />
      <CardContent title={title} list={list} />
    </article>
  );
}

export default Card;
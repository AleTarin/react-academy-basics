import React from 'react';

// Functional Component with name as prop
const Card = (props) => {
  return (
    <article className="card">
      <figure className="card__figure">
        <img className="card__figure__img" alt={props.title} src={props.img}></img>
      </figure>
      <div className="card__content">
        <h1>{props.title}</h1>
        <ul>
          {
            // Map to iterate our list array 
            props.list.map( unit => (<li> { unit } </li>))
          }
        </ul>
      </div>
  </article>
  );
}

export default Card;

import React from 'react';

const CardContent = ({title, list, src}) => {
  return (
    <div className="card__content">
      <h1>{title}</h1>
      <ul>
        {
          // Map to iterate our list array 
          list.map( (unit, index) => (<li key={index}> { unit } </li>))
        }
      </ul>
      <a href={src}>Based on: {src}</a>
    </div>
  );
}

export default CardContent;
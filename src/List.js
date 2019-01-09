import React from 'react';

// Functional Component with name as prop
const List = (props) => {
  return (
    <article className="article">
    <h1 className="article__title">{props.title}</h1>
      <ul className="article__list">
        {
          // Map to iterate our list array 
          props.list.map( unit => (<li> { unit } </li>))
        }
      </ul>
  </article>
  );
}

export default List;
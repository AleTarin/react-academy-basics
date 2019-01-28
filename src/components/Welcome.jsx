import React from 'react';

// Functional Component with name as prop
const Welcome = (props) => {
  return (
    <section>
      <h1>{`Welcome to ${props.name} !`}</h1>
      <img alt={props.name} src={props.image}></img>
    </section>
  );
}

export default Welcome;


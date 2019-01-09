import React from 'react';

// Functional Component with name as prop
const Title = (props) => {
  return (
    <h1>{`Hi, welcome to the ${props.name} Academy`} ! </h1>
  );
}

export default Title;


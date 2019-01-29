
import React from 'react';
import { navStyle } from './style';

const CardNav = ({ next, handler }) => {
  return (
    <button style={navStyle(next)} onClick={event => handler(event, next)}>
      {next ? '>' : '<'}
    </button>
  );
}

export default CardNav;
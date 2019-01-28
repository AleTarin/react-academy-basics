
import React from 'react';
import {navStyle} from './style';

const CardNav = ({next, handler}) => {
  return (
    <button style={navStyle(next)} onClick={handler(next)}>
      {next ? '>' : '<'}
    </button>
  );
}

export default CardNav;
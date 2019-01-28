
import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import CardNav from './CardNav';


const Info = ({ article, handler }) => {
  return (
    <section className="box--center">
      <Card article={article} />
      <CardNav next handler={handler} />
      <CardNav prev handler={handler} />
    </section>
  );
}

Info.defaultProps = {
  article: {
    title: '404 not found',
    img: 'https://i.gifer.com/7iJU.gif',
    list: [],
    src: '...'
  }
}

Info.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    img: PropTypes.string,
    list: PropTypes.array,
    src: PropTypes.string,
  }).isRequired
}

export default Info;

import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Articles = ({ data }) => (
  <ul>
    {data.map((article) => {
      const { title, src, img, id } = article;
      return (
        <li key={id}>
          <Article title={title} src={src} img={img} />
        </li>
      );
    })}
  </ul>
);

Articles.propTypes = propTypes;

export default Articles;

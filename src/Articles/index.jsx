import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Article from '../Article';
import './Articles.scss';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Articles = ({ data }) => (
  <div>
    <Helmet>
      <title>Articles</title>
    </Helmet>
    <ul className="Articles">
      {data.map((article) => {
        const { title, src, img, id } = article;
        return (
          <li key={id}>
            <Article title={title} src={src} img={img} />
          </li>
        );
      })}
    </ul>
  </div>
);

Articles.propTypes = propTypes;

export default Articles;

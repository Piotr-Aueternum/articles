import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Article.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.array,
};
const defaultProps = {
  tags: [],
};

const Article = ({ title, tags, src, img, id }) => (
  <div className="Article">
    <h2 className="Article__heading">{title}</h2>
    <ul>{tags.map(tag => tag)}</ul>
    <div>
      <img className="Article__image" alt="" src={img.url} />
      <div>Zdjęcie: {img.author}</div>
    </div>
    <div>Źródło: {src}</div>
    <Link to={`/article/${id}`}>Czytaj więcej..</Link>
  </div>
);

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;

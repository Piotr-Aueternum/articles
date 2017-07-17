import React from 'react';
import PropTypes from 'prop-types';
import './Article.scss';

const propTypes = {
  title: PropTypes.string.isRequired,
  tags: PropTypes.array,
  src: PropTypes.string.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
const defaultProps = {
  tags: [],
};

const Article = ({ title, tags, src, img }) => (
  <div className="Article">
    <h1>{title}</h1>
    <ul>{tags.map(tag => tag)}</ul>
    <img className="Article__image" alt="" src={img.url} />
    <div>{img.author}</div>
    <div>{src}</div>
  </div>
);

Article.propTypes = propTypes;
Article.defaultProps = defaultProps;

export default Article;

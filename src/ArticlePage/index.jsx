import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const ArticlePage = props => (
  <div>
    Hello {props.match.params.id}
  </div>
);

ArticlePage.propTypes = propTypes;

export default ArticlePage;

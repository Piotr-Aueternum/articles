import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  body: PropTypes.arrayOf(PropTypes.object).isRequired,
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.object,
};

const defaultProps = {
  img: undefined,
};

const ArticlePage = ({ body, img, src, title }) => (
  <div>
    <h1>{title}</h1>
    {img &&
      (<div>
        <img className="Article__image" alt="" src={img.url} />
        <div>Zdjęcie: {img.author}</div>
      </div>)
    }
    <div>Źródło {src}</div>
    <div>
      {body.map((item) => {
        if (item.t === 'HTML') {
          return <p key={item.key} dangerouslySetInnerHTML={{ __html: item.data }} />;
        }
        return <p key={item.key}>{item.data}</p>;
      })}
    </div>
  </div>
);

ArticlePage.propTypes = propTypes;
ArticlePage.defaultProps = defaultProps;

export default ArticlePage;

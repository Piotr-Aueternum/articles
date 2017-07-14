import React from 'react';
import { Helmet } from 'react-helmet';
import Article from './Article';

const placeholder = { url: 'http://via.placeholder.com/350x150', author: 'Author' };
const article = { title: 'Test article', src: 'Test.pl', img: placeholder };

const App = () => (
  <div>
    <Helmet>
      <title>Articles</title>
    </Helmet>
    <Article title={article.title} src={article.src} img={article.img} />
  </div>
);


export default App;

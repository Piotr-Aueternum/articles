import React from 'react';
import { Helmet } from 'react-helmet';
import Articles from './Articles';

const placeholder = { url: 'http://via.placeholder.com/350x150', author: 'Author' };

const data = [{
  id: 1,
  title: 'Test article',
  src: 'Test.pl',
  img: placeholder,
}, {
  id: 2,
  title: 'Test2 article',
  src: 'Test.pld',
  img: placeholder,
}];

const App = () => (
  <div>
    <Helmet>
      <title>Articles</title>
    </Helmet>
    <Articles data={data} />
  </div>
);


export default App;

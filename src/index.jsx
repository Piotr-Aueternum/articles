import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

const App = () => (
  <div>
    <Helmet>
      <title>Articles</title>
    </Helmet>
    Hello Articles
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

import React from 'react';
import Articles from '../Articles';
import Data from '../data.json';
import './App.scss';

const { data: { articles } } = Data;

const App = () => (
  <div className="App">
    <Articles data={articles} />
  </div>
);


export default App;

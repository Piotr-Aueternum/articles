import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Articles from '../Articles';
import './App.scss';
import { getArticles } from '../services';
import ArticlePage from '../ArticlePage';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    getArticles()
      .then((res) => {
        const { data: { articles: data } } = res;
        this.setState({ data });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route path="/article/:id" component={ArticlePage} />
          <Route exact path="/">
            <Articles data={data} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;

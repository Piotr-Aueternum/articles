import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Article from '../Article';
import './Articles.scss';

export default class Articles extends React.Component {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    onMount: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }
  componentDidMount() {
    this.props.onMount();
  }
  componentWillReceiveProps(props) {
    this.setState({
      data: props.data,
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Helmet>
          <title>Articles</title>
        </Helmet>
        <h1>Articles</h1>
        <ul className="Articles">
          {data.map((article) => {
            const { title, src, img, id } = article;
            return (
              <li key={id}>
                <Article title={title} id={id} src={src} img={img} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

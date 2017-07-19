import { connect } from 'react-redux';
import Component from './view';

const mapStateToProps = (state, props) => {
  const { data } = state;
  const arr = data.filter(item => item.id === props.match.params.id);
  const { body, img, src, title } = arr[0];
  body.forEach((item, key) => Object.assign(item, { key }));
  return ({ body, img, src, title });
};

export default connect(mapStateToProps)(Component);

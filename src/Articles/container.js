import { connect } from 'react-redux';
import Component from './view';
import { updateArticles } from '../actions';
import { getArticles } from '../services';


const mapStateToProps = state => ({
  data: state.data,
});

const mapDispatchToProps = dispatch => ({
  onMount: () => {
    getArticles().then((res) => {
      dispatch(updateArticles(res.data.articles));
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);

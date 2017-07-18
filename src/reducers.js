import * as a from './actions';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case a.UPDATE_DATA: {
      return { ...state, state: action.payload };
    }
    default:
      return state;
  }
}
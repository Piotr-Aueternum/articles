import * as c from './constans';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case c.UPDATE_DATA: {
      return { data: action.payload };
    }
    default:
      return state;
  }
};

import { UPDATE_DATA } from './constans';

export const updateArticles = payload => ({
  type: UPDATE_DATA,
  payload,
});

export default { updateArticles };

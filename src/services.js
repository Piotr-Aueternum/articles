import { url, articles } from './constans';
import Api from './api_client';

const { localStorage } = window;

export const getArticles = () => Api.init({
  url,
  pathname: articles,
});

export const setLocalStorage = payload => localStorage.setItem('state', JSON.stringify(payload));

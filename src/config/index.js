const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080/categories'
  : 'https://pivaflix.herokuapp.com/categories';

export default {
  URL_BACKEND_TOP,
};

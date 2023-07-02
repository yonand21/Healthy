import CONFIG from './config';

const API_ENDPOINT = {
  ARTIKEL: `${CONFIG.BASE_URL}artikel`,
  ARTIKEL_DETAIL: (id) => `${CONFIG.BASE_URL}artikel/${id}`,
};

export default API_ENDPOINT;

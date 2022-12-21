import axios from 'axios';
import cookie from 'js-cookie';

import variables from '../../config/variables';

const token = cookie.get(variables.cookie.token_name);

const api = axios.create({
  baseURL: variables.api.base_url,
});

function setApiDefaultHeadersAuthorization(token: string | undefined): void {
  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }
}

function clearApiDefaultHeadersAuthorization(): void {
  delete api.defaults.headers['Authorization'];
}

setApiDefaultHeadersAuthorization(token);

export {
  api,
  setApiDefaultHeadersAuthorization,
  clearApiDefaultHeadersAuthorization,
};

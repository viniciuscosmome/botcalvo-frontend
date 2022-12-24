import Router from 'next/router';

import { someFieldIsEmpty } from '../../modules/Validates/geral';
import { api } from '../api';
import type { iAuthError } from '../global.api.types';
import type {
  iLoginProps,
  iLoginResponse,
  iRegisterProps,
  iRecoverResponse,
} from './types';

export async function loginRequest({
  email,
  password,
}: iLoginProps): Promise<iLoginResponse> {
  const result = {} as iLoginResponse;
  const lastValidate = someFieldIsEmpty(email, password);

  if (lastValidate) {
    result.status = 400;
    result.message = 'All fields are required';
    return result;
  }

  await api
    .post('/auth/login', {
      email,
      password,
    })
    .then((response) => {
      const { status, data } = response;

      if (status && data.token && data.user) {
        const { name, channel, channel_limit } = data.user;

        result.status = status;
        result.token = data.token;
        result.user = {
          name,
          channels_limit: channel_limit,
          channels: channel
        };
      }
    })
    .catch((err) => {
      const { response } = err;

      if (response && response.status && response.data.message) {
        result.status = response.status;
        result.message = response.data.message;
      } else {
        result.status = 500;
        result.message = 'ERROR:: SIGNIN:: UNKNOW';
      }
    });

  return result;
}

export async function logoutRequest(token: string): Promise<void> {
  await api.post('/user/logout', { token });
}

export async function recoverUserInformation(token: string): Promise<iRecoverResponse> {
  const result = {} as iRecoverResponse;

  await api
    .post('/user/recover', {
      token
    })
    .then((response) => {
      const { status, data } = response;

      if (status && data && data.name) {
        const { name, channel_limit, channel } = data;

        result.status = status;
        result.name = name;
        result.channels_limit = channel_limit;
        result.channels = channel;
      }
    })
    .catch((err) => {
      const { response } = err;

      if (response && response.status && response.data.message) {
        result.status = response.status;
        result.message = response.data.message;
      } else {
        result.status = 500;
        result.message = 'ERROR:: RECOVER:: UNKNOW';
      }

      return;
    });

  return result;
}

export async function registerUser({
  name,
  email,
  password,
  confirmPassword,
  terms,
}: iRegisterProps): Promise<iAuthError> {
  const result = {} as iAuthError;
  const lastValidate = someFieldIsEmpty(
    name,
    email,
    password,
    confirmPassword,
    terms,
  );

  if (lastValidate) {
    result.status = 400;
    result.message = 'All fields are required';
    return result;
  }

  await api
    .post('/user/', {
      name,
      email,
      password,
      confirmPassword,
      terms,
    })
    .then((response) => {
      const { status } = response;

      if (status && status >= 200 && status < 300) {
        Router.push('/auth/login');
      }

      result.status = status;
    })
    .catch((err) => {
      const { response } = err;

      if (response && response.status && response.data.message) {
        result.status = response.status;
        result.message = response.data.message;
      } else {
        result.status = 500;
        result.message = 'ERROR:: REGISTER:: UNKNOW';
      }
    });

  return result;
}

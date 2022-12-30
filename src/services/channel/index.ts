import Router from 'next/router';

import type { iApiErrorResponse, iChannel, iStream } from '../global.api.types';
import { someFieldIsEmpty } from '../../modules/Validates/geral';
import { api } from '../api';

type iCrateChannel = {
  channelId: string;
  channelName: string;
};

type  iCrateChannelResponse = {
  channel: iChannel;
} & iApiErrorResponse;

type iUpdateChannelName = {
  id: string;
} & iCrateChannel;

type iUpdateChannelNameResponse = {
  stream: iStream;
} & iApiErrorResponse;

export async function createChannel({
  channelId,
  channelName
}: iCrateChannel): Promise<iApiErrorResponse> {
  const result = {} as iApiErrorResponse;
  const lastValidation = someFieldIsEmpty(channelId, channelName);

  if (lastValidation) {
    result.status = 400;
    result.message = 'All fields are required';
    return result;
  }

  await api
    .post('/channel/', {
      channel_id: channelId,
      name: channelName
    })
    .then((response) => {
      const { status } = response;

      if (status >= 200 && status < 300) {
        result.status = status;

        // ! relembrar
        // ? adicionar os dados do novo canal na resposta
        // ? também alterar a tipagem
      }
    })
    .catch((err) => {
      const { response } = err;

      if (response && response.status && response.data.message) {
        result.status = response.status;
        result.message = response.data.message;
      } else {
        result.status = 500;
        result.message = 'ERROR:: CREATE_CHANNEL:: UNKNOW';
      }
    });

  return result;
}

export async function updateChannel({
  id,
  channelId,
  channelName
}: iUpdateChannelName): Promise<iUpdateChannelNameResponse> {
  const result = {} as iUpdateChannelNameResponse;
  const lastValidation = someFieldIsEmpty(id, channelId, channelName);

  if (lastValidation) {
    result.status = 400;
    result.message = 'All fields are required';
    return result;
  }

  await api
    .put('/channel/update', {
      id,
      channel_id: channelId,
      name: channelName
    })
    .then((response) => {
      const { status, data } = response;

      if (status && status >= 200 && status < 300) {
        result.status = status;
        result.stream = data.stream;
      }
    })
    .catch((err) => {
      const { response } = err;

      if (response && response.status && response.data.message) {
        result.status = response.status;
        result.message = response.data.message;
      } else {
        result.status = 500;
        result.message = 'ERROR: UPDATE_CHANNEL: UNKNOW';
      }
    });

  return result;
}

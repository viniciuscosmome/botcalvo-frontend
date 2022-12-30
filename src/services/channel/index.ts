import Router from 'next/router';

import type { iApiErrorResponse } from '../global.api.types';
import { someFieldIsEmpty } from '../../modules/Validates/geral';
import { api } from '../api';

type iCrateChannel = {
  channelId: string;
  channelName: string;
}

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

      if (status && status >= 200 && status < 300) {
        Router.push(`/dashboard/new-stream?ch=${channelId}`);
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
        result.message = 'ERROR:: CREATE_CHANNEL:: UNKNOW';
      }
    });

  return result;
}

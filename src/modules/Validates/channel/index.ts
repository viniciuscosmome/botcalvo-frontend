import validator from 'validator';

import type {
  iValidateResponse,
  iValidateCreateChannel,
  iValidateCreateChannelVerifyFields
} from '../types';
import { errors, nameLimit, messages } from '../config';

let field: string;

const verify: iValidateCreateChannelVerifyFields = {
  channelId(id: string): iValidateResponse {
    let isValidId: iValidateResponse;
    field = 'ID';

    if (validator.isEmpty(id, { ignore_whitespace: true })) {
      isValidId = messages.empty(field);
    } else if (!validator.isNumeric(id)) {
      isValidId = messages.onlyNumbers(field);
    }

    return isValidId;
  },

  channelName(name: string): iValidateResponse {
    let isValidName: iValidateResponse;
    field = 'Nome';

    if (validator.isEmpty(name, { ignore_whitespace: true })) {
      isValidName = messages.empty(field);
    } else if (!validator.isLength(name, nameLimit)) {
      isValidName = messages.length(field, nameLimit);
    }

    return isValidName;
  }
};

function clearErrors(): void {
  errors.splice(0);
}

function validate(fields: iValidateCreateChannel): Array<string> {
  let error: iValidateResponse;

  clearErrors();

  for (const field in fields) {
    if (verify[field]) {
      const value = fields[field];

      if (typeof value === 'string') {
        error = verify[field](value.toString());
      }
    }

    error && !errors.includes(error) && errors.push(error);
  }

  return errors;
}

export default validate;

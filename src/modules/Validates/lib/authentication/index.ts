import validator from 'validator';
import type {
  iValidateAuthenticationVerifyFields,
  iValidateAuthenticationResponse,
  iValidateAuthenticationFields,
} from './types';
import { errors, nameLimit, passwordLimit, messages } from './config';

let field: string;
let compareField: string;

const verify: iValidateAuthenticationVerifyFields = {
  name: (param: string): iValidateAuthenticationResponse => {
    let message: iValidateAuthenticationResponse;
    field = 'Nome';

    if (validator.isEmpty(param)) {
      message = messages.empty(field);
    } else if (!validator.isLength(param, nameLimit)) {
      message = messages.length(field, nameLimit);
    }

    return message;
  },

  email: (param: string): iValidateAuthenticationResponse => {
    let message: iValidateAuthenticationResponse;
    field = 'E-mail';

    if (validator.isEmpty(param)) {
      message = messages.empty(field);
    } else if (!validator.isEmail(param)) {
      message = messages.format(field);
    }

    return message;
  },

  password: (
    param: string,
    currentPage?: string,
  ): iValidateAuthenticationResponse => {
    let message: iValidateAuthenticationResponse;
    field = 'Senha';

    if (validator.isEmpty(param)) {
      message = messages.empty(field);
    } else if (
      currentPage &&
      currentPage === 'register' &&
      !validator.isStrongPassword(param)
    ) {
      message = messages.requiredChars(field);
    } else if (!validator.isLength(param, passwordLimit)) {
      message = messages.length(field, passwordLimit);
    }

    return message;
  },

  confirmPassword: (
    param: string,
    compare: string | undefined = '',
  ): iValidateAuthenticationResponse => {
    let message: iValidateAuthenticationResponse;
    field = 'Confirmar senha';
    compareField = 'Senha';

    if (validator.isEmpty(param)) {
      message = messages.empty(field);
    } else if (
      typeof compare === 'string' &&
      !validator.equals(param, compare)
    ) {
      message = messages.equals(field, compareField);
    }

    return message;
  },

  terms: (param: string): iValidateAuthenticationResponse => {
    let message: iValidateAuthenticationResponse;

    if (validator.isBoolean(param) && param === 'false') {
      message = messages.acceptTerms();
    }

    return message;
  },
};

function clearErrors(): void {
  errors.splice(0);
}

function validate(fields: iValidateAuthenticationFields): Array<string> {
  let error: iValidateAuthenticationResponse;

  clearErrors();

  for (const field in fields) {
    if (verify[field]) {
      const value = fields[field];

      if (Array.isArray(value)) {
        error = verify[field](value[0], value[1]);
      } else if (typeof value === 'string') {
        error = verify[field](value.toString());
      }

      error && !errors.includes(error) && errors.push(error);
    }
  }

  return errors;
}

export type { iValidateAuthenticationFields };
export default validate;

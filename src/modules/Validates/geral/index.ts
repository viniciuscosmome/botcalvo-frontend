import validator from 'validator';

export function someFieldIsEmpty(...values: Array<string | number | boolean>): boolean {
  let response = false;
  for (const value of values) {
    response = validator.isEmpty(value.toString(), { ignore_whitespace: true });
    if (response) break;
  }

  return response;
}

export function validateToken(token: string | undefined): string {
  return token && !validator.isEmpty(token, { ignore_whitespace: true }) && validator.isJWT(token) ? token : '';
}

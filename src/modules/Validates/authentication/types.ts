export type iLengthLimit = {
  min: number;
  max: number;
};

export type iValidateAuthenticationResponse = string | undefined | void;

export type iValidateAuthenticationVerifyFields = {
  [key: string]: (param: string, sup?: string | undefined) => iValidateAuthenticationResponse;
  name: (param: string) => iValidateAuthenticationResponse;
  email: (param: string) => iValidateAuthenticationResponse;
  password: (param: string, currentPage: string | undefined) => iValidateAuthenticationResponse;
  confirmPassword: (param: string, compare: string | undefined) => iValidateAuthenticationResponse;
  terms: (param: string) => iValidateAuthenticationResponse;
};

export type iValidateAuthenticationFields = {
  [key: string]: string | Array<string> | boolean | undefined;
  name?: string | undefined;
  email?: string | undefined;
  password?: string | Array<string> | undefined;
  confirmPassword?: Array<string> | undefined;
  terms?: string | boolean | undefined;
};

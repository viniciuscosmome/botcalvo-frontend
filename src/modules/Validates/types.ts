export type iLengthLimit = {
  min: number;
  max: number;
};

export type iValidateResponse = string | undefined | void;

export type iValidateAuthenticationVerifyFields = {
  [key: string]: (param: string, sup?: string | undefined) => iValidateResponse;
  name: (param: string) => iValidateResponse;
  email: (param: string) => iValidateResponse;
  password: (param: string, currentPage: string | undefined) => iValidateResponse;
  confirmPassword: (param: string, compare: string | undefined) => iValidateResponse;
  terms: (param: string) => iValidateResponse;
};

export type iValidateAuthenticationFields = {
  [key: string]: string | Array<string> | boolean | undefined;
  name?: string | undefined;
  email?: string | undefined;
  password?: string | Array<string> | undefined;
  confirmPassword?: Array<string> | undefined;
  terms?: string | boolean | undefined;
};

export type iValidateCreateChannel = {
  [key: string]: string | undefined;
  channelId?: string | undefined;
  channelName?: string | undefined;
};

export type iValidateCreateChannelVerifyFields = {
  [key: string]: (param: string) => iValidateResponse;
  channelId: (param: string) => iValidateResponse;
  channelName: (param: string) => iValidateResponse;
};

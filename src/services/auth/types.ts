import type { iChannel, iAuthError } from '../global.api.types';

export type iLoginProps = {
  email: string;
  password: string;
};

export type iUserInfo = {
  name: string;
  channels_limit: number;
  channels: Array<iChannel>;
};

export type iLoginResponse = iAuthError & {
  token: string;
  user: iUserInfo | undefined;
};

export type iRegisterProps = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

export type iRecoverResponse = iAuthError & iUserInfo;

// export type iRecoveryProps = {
//   email: string;
// };

// export type iResetProps = {
//   password: string;
//   confirmPassword: string;
// };

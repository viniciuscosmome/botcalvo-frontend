import { ReactNode, useEffect, useState } from 'react';
import { createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import type { iAuthError } from '../services/global.api.types';
import type { iLoginProps, iUserInfo } from '../services/auth/types';
import { loginRequest, logoutRequest, recoverUserInformation } from '../services/auth';
import { setApiDefaultHeadersAuthorization, clearApiDefaultHeadersAuthorization } from '../services/api';
import variables from '../config/variables';
import { validateToken } from '../modules/Validates/geral';

type iAuthProvider = {
  children: ReactNode | Array<ReactNode>;
};

type iAuthContext = {
  isAuthenticated: boolean;
  user: iUserInfo | null;
  signIn: (data: iLoginProps) => Promise<void | iAuthError>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext({} as iAuthContext);

export function AuthProvider({ children }: iAuthProvider) {
  const [user, setUser] = useState<iUserInfo | null>(null);

  const isAuthenticated = !!user;

  const signIn = async ({ email, password }: iLoginProps): Promise<void | iAuthError> => {
    const { status, token, user, message } = await loginRequest({
      email,
      password
    });

    const checkedToken = validateToken(token);

    if (checkedToken && user) {
      cookie.set(variables.cookie.token_name, checkedToken, {
        expires: variables.cookie.token_expires(),
        secure: process.env.NODE_ENV === 'production',
      });

      setApiDefaultHeadersAuthorization(checkedToken);
      setUser(user);

      Router.push('/dashboard/stats');
    } else {
      return {
        status,
        message
      };
    }
  };

  const logout = async (): Promise<void> => {
    const token = cookie.get(variables.cookie.token_name);
    const checkedToken = validateToken(token);

    if (checkedToken) {
      await logoutRequest(checkedToken);
    }

    clearApiDefaultHeadersAuthorization();
    setUser({} as iUserInfo);
    cookie.remove(variables.cookie.token_name);

    Router.push('/');
  };

  const checkToken = (): void => {
    const token = cookie.get(variables.cookie.token_name);
    const checkedToken = validateToken(token);

    if (!user && checkedToken) {
      recoverUserInformation(checkedToken)
        .then(response => {
          if (response.status === 401) {
            logout();
          } else {
            setUser(response);
          }
        });
    }
  };

  useEffect(checkToken, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

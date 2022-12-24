import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import type { iUserInfo } from '../services/auth/types';
import { logoutRequest, recoverUserInformation } from '../services/auth';
import { clearApiDefaultHeadersAuthorization } from '../services/api';
import variables from '../config/variables';
import { validateToken } from '../modules/Validates/geral';

type iAuthProvider = {
  children: ReactNode | Array<ReactNode>;
};

type iAuthContext = {
  isAuthenticated: boolean;
  user: iUserInfo | null;
  setUser: Dispatch<SetStateAction<iUserInfo | null>>;
  disconnectUser: (sign?: boolean) => void;
};

export const AuthContext = createContext({} as iAuthContext);

export function AuthProvider({ children }: iAuthProvider) {
  const [user, setUser] = useState<iUserInfo | null>(null);

  const isAuthenticated = !!user;

  const getTokenFromCookie = (): string | undefined => {
    const token = cookie.get(variables.cookie.token_name);
    const checkedToken = validateToken(token);

    return checkedToken;
  };

  const disconnectUser = async (signin?: boolean): Promise<void> => {
    const token = getTokenFromCookie();

    if (token) {
      await logoutRequest(token);
    }

    clearApiDefaultHeadersAuthorization();
    setUser({} as iUserInfo);
    cookie.remove(variables.cookie.token_name);

    signin && Router.push('/auth/login');
  };

  const checkCurrentToken = (): void => {
    const token = getTokenFromCookie();

    if (!user && token) {
      recoverUserInformation(token)
        .then(( response ) => {
          if (response.status >= 200 && response.status < 300) {
            setUser(response);
          } else {
            disconnectUser();
          }
        });
    }
  };

  useEffect(checkCurrentToken, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, setUser, disconnectUser }}>
      {children}
    </AuthContext.Provider>
  );
}

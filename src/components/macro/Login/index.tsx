import cookie from 'js-cookie';
import { SyntheticEvent, useContext, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';

import type { iApiErrorResponse } from '../../../services/global.api.types';
import { setApiDefaultHeadersAuthorization } from '../../../services/api';
import { AuthContext } from '../../../contexts/auth';
import variables from '../../../config/variables';
import { loginRequest } from '../../../services/auth';
import { validateToken } from '../../../modules/Validates/geral';
import type { iValidateAuthenticationFields } from '../../../modules/Validates/types';
import authValidateFields from '../../../modules/Validates/authentication';
import { Forms, Input, ButtonAction, HorizontalSplit, Title, Alert, FormErrors } from '../../';
import styles from './style.module.scss';

export function Login() {
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);
  const [signInError, setSignInError ] = useState({} as iApiErrorResponse);
  const [validationInProgress, setValidationInProgress] = useState(false);

  const onsubmit = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();
    setValidationInProgress(true);
    setSignInError({} as iApiErrorResponse);

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
      setSignInError({
        status,
        message
      });
    }

    setValidationInProgress(false);
  };

  const validateFields = (data: iValidateAuthenticationFields): void => {
    const result = authValidateFields(data);
    setInvalidFields(result);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;
    const { name, value } = input;
    const currentFieldsValues = {
      email,
      password
    };

    if (name === 'email') {
      currentFieldsValues.email = value;
      setEmail(value);
    }

    if (name === 'password') {
      currentFieldsValues.password = value;
      setPassword(value);
    }

    validateFields(currentFieldsValues);
  };

  return (
    <Forms onsubmit={onsubmit}>
      <Alert
        show={!!signInError.status}
        status={'error'}
        title={JSON.stringify(signInError.status)}
        content={signInError.message ?? 'ABOUT_ERROR::SIGNIN::UNDEFINED'}
      />

      <Title size={'medium'}>
        Entrar
      </Title>

      <Input
        describe={'e-mail:'}
        type={'email'}
        name={'email'}
        value={email}
        onChange={changeValue}
        required={true}
      />

      <Input
        describe={'senha:'}
        type={'password'}
        name={'password'}
        value={password}
        onChange={changeValue}
        required={true}
      />

      {invalidFields.length
        ? <FormErrors messages={invalidFields} />
        : <ButtonAction disabled={validationInProgress} type={'submit'} fitWidth grad>Entrar</ButtonAction>}

      <HorizontalSplit content={'ou'} />

      <Link href={'/auth/register'} className={styles.fitWidth}>
        <ButtonAction type={'button'} fitWidth style={'simple'}>
          Cadastrar-se
        </ButtonAction>
      </Link>

      <Link href={'/auth/recovery'} className={styles.fitWidth}>
        <ButtonAction type={'button'} fitWidth style={'simple'}>
          Recuperar senha
        </ButtonAction>
      </Link>
    </Forms>
  );
}

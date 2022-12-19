import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';
import { Forms, Input, ButtonAction, HorizontalSplit, Title, FormErrors } from '../../';
import type { iValidateAuthenticationFields } from '../../../modules/Validates/';
import Validates from '../../../modules/Validates/';
import styles from './style.module.scss';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('SEND TO AXIOS: ', email, password);
  };

  const validateFields = (data: iValidateAuthenticationFields): void => {
    const result = Validates.auth(data);
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
    <Forms action={'./'} method={'GET'} onsubmit={onsubmit}>
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
        : <ButtonAction type={'submit'} fitWidth grad>Entrar</ButtonAction>}

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

import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';
import { Forms, Input, ButtonAction, HorizontalSplit, Title } from '../../';
import styles from './style.module.scss';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('SEND TO AXIOS: ', email, password);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;

    input.name === 'email' && setEmail(input.value);
    input.name === 'password' && setPassword(input.value);
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

      <ButtonAction type={'submit'} fitWidth grad>
          Entrar
      </ButtonAction>

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

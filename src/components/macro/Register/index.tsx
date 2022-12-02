import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';
import { Forms, Input, Checkbox, ButtonAction, HorizontalSplit, Title } from '../../';
import styles from './style.module.scss';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('SEND TO AXIOS: ', name, email, password, confirmPassword, terms);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;

    input.name === 'name' && setName(input.value);
    input.name === 'email' && setEmail(input.value);
    input.name === 'password' && setPassword(input.value);
    input.name === 'confirmPassword' && setConfirmPassword(input.value);
    input.name === 'terms' && setTerms(input.checked);
  };

  return (
    <Forms action={'/auth/register'} method={'GET'} onsubmit={onsubmit}>
      <Title size={'medium'}>
        Cadastrar-se
      </Title>

      <Input
        describe={'nome:'}
        type={'text'}
        name={'name'}
        value={name}
        onChange={changeValue}
        required={true}
      />

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

      <Input
        describe={'confirmar senha:'}
        type={'password'}
        name={'confirmPassword'}
        value={confirmPassword}
        onChange={changeValue}
        required={true}
      />

      <Checkbox
        name={'terms'}
        checked={terms}
        onChange={changeValue}
        required={true}
      >
        concordo com os
        <Link href={'/?content=legal-use'} className={styles.linkTerms}>
          termos de uso
        </Link>
        e
        <Link href={'/?content=legal-privacy'} className={styles.linkTerms}>
          política de privacidade.
        </Link>
      </Checkbox>

      <ButtonAction type={'submit'} fitWidth grad>
        Cadastrar
      </ButtonAction>

      <HorizontalSplit content='ou' />

      <Link href={'/auth/login'} className={styles.fitWidth}>
        <ButtonAction type={'submit'} fitWidth style={'simple'}>
          Entrar
        </ButtonAction>
      </Link>
    </Forms>
  );
}

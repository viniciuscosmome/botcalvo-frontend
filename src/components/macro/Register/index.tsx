import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';
import { Forms, Input, Checkbox, ButtonAction, HorizontalSplit, Title, FormErrors } from '../../';
import Validates from '../../../modules/Validates/';
import type { iValidateAuthenticationFields } from '../../../modules/Validates/';
import styles from './style.module.scss';

export function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('SEND TO AXIOS: ', name, email, password, confirmPassword, terms);
  };

  const validateFields = (data: iValidateAuthenticationFields): void => {
    const result = Validates.auth(data);
    setInvalidFields(result);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;
    const { name, value, checked } = input;
    const currentFieldsValues = {
      name,
      email,
      password: [password, 'register'],
      confirmPassword: [confirmPassword, password],
      terms: 'false'
    };

    if (name === 'name') {
      currentFieldsValues.name = value;
      setName(value);
    }

    if (name === 'email') {
      currentFieldsValues.email = value;
      setEmail(value);
    }

    if (name === 'password') {
      currentFieldsValues.password[0] = value;
      setPassword(value);
    }

    if (name === 'confirmPassword') {
      currentFieldsValues.confirmPassword[0] = value;
      setConfirmPassword(value);
    }

    if (name === 'terms') {
      currentFieldsValues.terms = checked.toString();
      setTerms(checked);
    }

    validateFields(currentFieldsValues);
  };

  return (
    <Forms action={''} method={'POST'} onsubmit={onsubmit}>
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

      {invalidFields.length
        ? <FormErrors messages={invalidFields} />
        : <ButtonAction type={'submit'} fitWidth grad>Cadastrar</ButtonAction>}

      <HorizontalSplit content='ou' />

      <Link href={'/auth/login'} className={styles.fitWidth}>
        <ButtonAction type={'submit'} fitWidth style={'simple'}>
          Entrar
        </ButtonAction>
      </Link>
    </Forms>
  );
}

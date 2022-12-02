import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';
import { Forms, Input, ButtonAction, Title } from '../../';

export function Recovery() {
  const [email, setEmail] = useState('');

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('SEND TO AXIOS: ', email);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;

    input.name === 'email' && setEmail(input.value);
  };

  return (
    <Forms action={'/auth/recovery'} method={'GET'} onsubmit={onsubmit}>
      <Title size={'medium'}>
        Recuperar
      </Title>

      <Input
        describe={'e-mail:'}
        type={'email'}
        name={'email'}
        value={email}
        onChange={changeValue}
        required={true}
      />

      <ButtonAction type={'submit'} fitWidth grad>
        Recuperar
      </ButtonAction>

      <Link href={'/auth/login'}>
        Lembrou da senha? Entre
      </Link>
    </Forms>
  );
}

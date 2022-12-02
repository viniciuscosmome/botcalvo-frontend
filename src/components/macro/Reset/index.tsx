import { SyntheticEvent, useState } from 'react';
import { Forms, Input, ButtonAction, Title } from '../../';

export function Reset() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('SEND TO AXIOS: ', password, confirmPassword);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;

    input.name === 'password' && setPassword(input.value);
    input.name === 'confirmPassword' && setConfirmPassword(input.value);
  };

  return (
    <Forms action={'/auth/recovery'} method={'GET'} onsubmit={onsubmit}>
      <Title size={'medium'}>
        Redefinir senha
      </Title>

      <Input
        describe={'nova senha:'}
        type={'password'}
        name={'password'}
        value={password}
        onChange={changeValue}
        required={true}
      />

      <Input
        describe={'confirmar nova senha:'}
        type={'password'}
        name={'confirmPassword'}
        value={confirmPassword}
        onChange={changeValue}
        required={true}
      />

      <ButtonAction type={'submit'} fitWidth grad>
        Redefinir
      </ButtonAction>
    </Forms>
  );
}

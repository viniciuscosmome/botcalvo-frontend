import { SyntheticEvent, useState } from 'react';
import { Forms, Input, ButtonAction, Title, FormErrors } from '../../';
import type { iValidateAuthenticationFields } from '../../../modules/Validates';
import Validates from '../../../modules/Validates';

export function Reset() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('SEND TO AXIOS: ', password, confirmPassword);
  };

  const validateFields = (data: iValidateAuthenticationFields): void => {
    const result = Validates.auth(data);
    setInvalidFields(result);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;
    const { name, value } = input;
    const currentFieldsValues = {
      password: [password, 'register'],
      confirmPassword: [confirmPassword, password]
    };

    if (name === 'password') {
      currentFieldsValues.password[0] = value;
      setPassword(value);
    }

    if (name === 'confirmPassword') {
      currentFieldsValues.confirmPassword[0] = value;
      setConfirmPassword(value);
    }

    validateFields(currentFieldsValues);
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

      {invalidFields.length
        ? <FormErrors messages={invalidFields} />
        : <ButtonAction type={'submit'} fitWidth grad>Redefinir</ButtonAction>}
    </Forms>
  );
}

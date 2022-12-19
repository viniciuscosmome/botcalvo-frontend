import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';
import { Forms, Input, ButtonAction, Title, FormErrors } from '../../';
import type { iValidateAuthenticationFields } from '../../../modules/Validates';
import Validates from '../../../modules/Validates';

export function Recovery() {
  const [email, setEmail] = useState('');
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();

    console.log('SEND TO AXIOS: ', email);
  };

  const validateFields = (data: iValidateAuthenticationFields): void => {
    const result = Validates.auth(data);
    setInvalidFields(result);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;
    const { name, value } = input;
    const currentFieldsValues = {
      email
    };

    if (name === 'email') {
      currentFieldsValues.email = value;
      setEmail(value);
    }

    validateFields(currentFieldsValues);
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

      {invalidFields.length
        ? <FormErrors messages={invalidFields} />
        : <ButtonAction type={'submit'} fitWidth grad>Recuperar</ButtonAction>}

      <Link href={'/auth/login'}>
        Lembrou da senha? Entre
      </Link>
    </Forms>
  );
}

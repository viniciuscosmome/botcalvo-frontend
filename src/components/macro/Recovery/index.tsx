import Link from 'next/link';
import { SyntheticEvent, useState } from 'react';

import type { iValidateAuthenticationFields } from '../../../modules/Validates/types';
import authValidateFields from '../../../modules/Validates/authentication';
import { Forms, Input, ButtonAction, Title, FormErrors } from '../../';

export function Recovery() {
  const [email, setEmail] = useState('');
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);

  const onsubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
  };

  const validateFields = (data: iValidateAuthenticationFields): void => {
    const result = authValidateFields(data);
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
    <Forms onsubmit={onsubmit}>
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

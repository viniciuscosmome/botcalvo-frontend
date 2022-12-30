import { SyntheticEvent, useContext, useState } from 'react';

import type { iValidateCreateChannel } from '../../../modules/Validates/types';
import type { iApiErrorResponse } from '../../../services/global.api.types';
import { AuthContext } from '../../../contexts/auth';
import styles from './style.module.scss';
import { Title, Input, ButtonAction, FormErrors, Alert } from '../../';
import channelValidateFields from '../../../modules/Validates/channel';
import { createChannel } from '../../../services/channel';

export function CreateChannel() {
  const { user, setUser } = useContext(AuthContext);
  const [channelId, setChannelId] = useState('');
  const [channelName, setChannelName] = useState('');
  const [validationInProgress, setValidationInProgress] = useState(false);
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);
  const [responseError, setResponseError] = useState({} as iApiErrorResponse);

  const handleSubmit = async (event: SyntheticEvent): Promise<void> => {
    event.preventDefault();
    setValidationInProgress(true);
    setResponseError({} as iApiErrorResponse);

    const result = await createChannel({ channelId, channelName });

    if (result.message) {
      setResponseError(result);
    } else if (result.status >= 200 && result.status < 300) {
      const updatedUser = user;

      if (updatedUser) {
        updatedUser.channels_limit -= 1;
        // ! relembrar
        // ? adicionar os dados do usuário que irão retornar do back-end
        setUser(updatedUser);
      }
    }

    setValidationInProgress(false);
  };

  const validateFields = (data: iValidateCreateChannel): void => {
    const result = channelValidateFields(data);
    setInvalidFields(result);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;
    const { name, value } = input;
    const currentFieldsValues = {
      channelId,
      channelName
    };

    if (name === 'channelId') {
      currentFieldsValues.channelId = value;
      setChannelId(value);
    }

    if (name === 'channelName') {
      currentFieldsValues.channelName = value;
      setChannelName(value);
    }

    validateFields(currentFieldsValues);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Alert
          show={!!responseError.status}
          status={'warning'}
          title={JSON.stringify(responseError.status)}
          content={responseError.message ?? 'ABOUT_ERROR:NEW_CHANNEL:UNDEFINED'}
        />

        <Title size={'small'}>
          Criando canal
        </Title>

        <Input
          describe={'ID:'}
          type={'text'}
          name={'channelId'}
          value={channelId}
          onChange={changeValue}
          required={true}
        />

        <Input
          describe={'Nome:'}
          type={'text'}
          name={'channelName'}
          value={channelName}
          onChange={changeValue}
          required={true}
        />

        {invalidFields.length
          ? <FormErrors messages={invalidFields} />
          : (
            <ButtonAction type='submit' fitWidth grad customClass={styles.submit} disabled={validationInProgress}>
              Criar
            </ButtonAction>
          )}
      </form>
    </>
  );
}

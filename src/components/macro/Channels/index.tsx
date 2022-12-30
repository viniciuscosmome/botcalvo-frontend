import Router from 'next/router';
import { SyntheticEvent, useState, useContext } from 'react';

import type { iChannel, iStream } from '../../../services/global.api.types';
import type { iValidateCreateChannel } from '../../../modules/Validates/types';
import channelValidateFields from '../../../modules/Validates/channel';
import { AuthContext } from '../../../contexts/auth';
import { classes } from '../../../helpers/styles.helper';
import { ButtonAction, Title } from '../..';
import styles from './style.module.scss';

import { updateChannel } from '../../../services/channel';

function RenderStream({ id, image, name }: iStream, channelId: string) {
  const handleClick = () => {
    // ! relembrar
    console.log('handleclick-delete-stream', channelId);
  };

  return (
    <div key={id} className={classes(styles.stream, styles.delete)}>
      <figure className={styles.streamPicture}>
        <img src={image} className={styles.streamImage} />
      </figure>

      <button type={'button'} className={classes(styles.action, styles.delete)} onClick={handleClick}>
        <i className={'bi bi-trash3-fill'}></i>
      </button>

      <div className={styles.streamName}>
        {name}
      </div>
    </div>
  );
}

function RenderChannel({ id, channel_id, name, stream_info, stream_limit }: iChannel) {
  const [channelName, setChannelName] = useState(name || '');
  const [checked, setChecked] = useState(false);
  const [invalidFields, setInvalidFields] = useState<Array<string>>([]);
  const showChannelId = `show-channel-${id}`;

  const addStream = (): void => {
    Router.push(`/dashboard/new-stream?ch=${id}`);
  };

  const updateChannelName = async (): Promise<void> => {
    if (name.trim() === channelName.trim()) {
      return setChecked(false);
    }

    const result = await updateChannel({
      id,
      channelId: channel_id,
      channelName
    });

    // ! relembrar
    // ? alterar para modificar no contexto do usuário
    console.log(result);
  };

  const validateFields = (data: iValidateCreateChannel): void => {
    const result = channelValidateFields(data);
    setInvalidFields(result);
  };

  const changeValue = (event: SyntheticEvent<HTMLInputElement>): void => {
    const input = event.target as HTMLInputElement;
    const { name, value, checked } = input;
    const currentFieldsValues = { channelName };

    if (name === 'channelName') {
      currentFieldsValues.channelName = value;
      setChannelName(value);
    }

    if (name === 'checkbox') {
      setChecked(checked);
    }

    validateFields(currentFieldsValues);
  };

  return (
    <div id={id} className={styles.card}>
      <div className={styles.header}>
        <label htmlFor={showChannelId} className={styles.channelId}>
          <input id={showChannelId} type={'checkbox'} className={styles.checkbox} />

          ID: <span className={styles.channelIdValue}>{channel_id}</span>

          <i className={'bi bi-eye-fill'}></i>
        </label>

        <Title size={'small'} customClass={classes(styles.title, styles.updateChannel)}>
          <input
            type={'checkbox'}
            id={'updateChannelCheckbox'}
            name={'checkbox'}
            className={styles.checkbox}
            checked={checked}
            onChange={changeValue}
          />

          <input
            name={'channelName'}
            value={channelName}
            onChange={changeValue}
            className={styles.inputChannelName}
            disabled={!checked}
          />

          <label htmlFor={'updateChannelCheckbox'} className={styles.toggleVisibility}>
            {!invalidFields.length && <i className={classes('bi bi-pencil-fill', styles.edit)}></i>}
            <i className={classes('bi bi-x-circle-fill', styles.cancel)}></i>
          </label>

          <button
            type={'button'}
            onClick={updateChannelName}
            className={styles.submit}
            disabled={!checked}
          >
            <i className={'bi bi-check-circle-fill'}></i>
          </button>
        </Title>
      </div>

      <div className={styles.body}>
        {!!stream_limit &&
          <ButtonAction action={addStream} style={'simple-opacity'} fitWidth>
            <i className={'bi bi-plus-circle'}></i> Nova stream
          </ButtonAction>}

        <>
          {stream_info.map((stream: iStream) => RenderStream(stream, channel_id))}
        </>
      </div>
    </div>
  );
}

export function ChannelsWrapper() {
  const { user } = useContext(AuthContext);
  const channels = user?.channels;

  return (
    <div className={styles.wrapper}>
      <>
        {channels?.map((data: iChannel) => <RenderChannel {...data} key={data.id} />)}
      </>
    </div>
  );
}

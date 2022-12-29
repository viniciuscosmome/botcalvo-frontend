import { useContext } from 'react';
import Router from 'next/router';

import { AuthContext } from '../../../contexts/auth';
import { classes } from '../../../helpers/styles.helper';
import type { iChannel, iStream } from '../../../services/global.api.types';
import { ButtonAction, Title } from '../..';
import styles from './style.module.scss';

function RenderStream({id, image, name}: iStream, channelId: string) {
  const handleClick = () => {
    console.log('handleclick-delete-stream');
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

function RenderChannel({id, channel_id, name, stream_info, stream_limit}: iChannel) {
  const showChannelId = `show-channel-${id}`;

  const handleClick = (): void => {
    Router.push(`/dashboard/new-stream?ch=${id}`);
  };

  return (
    <div key={id} id={id} className={styles.card}>
      <div className={styles.header}>
        <label htmlFor={showChannelId} className={styles.channelId}>
          <input id={showChannelId} type={'checkbox'} className={styles.checkbox} />

          ID: <span className={styles.channelIdValue}>{channel_id}</span>

          <i className={'bi bi-eye-fill'}></i>
        </label>

        <Title size={'small'} customClass={styles.title}>
          {name}
        </Title>
      </div>

      <div className={styles.body}>
        {!!stream_limit &&
          <ButtonAction action={handleClick} style={'simple-opacity'} fitWidth>
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
        {channels?.map(RenderChannel)}
      </>
    </div>
  );
}

import { useContext, ReactNode } from 'react';

import { AuthContext } from '../../../contexts/auth';
import {
  Wrapper,
  Header,
  Column,
  Navigation,
  HorizontalSplit
} from '../../';

import type { iChannel, iStream } from '../../../services/global.api.types';

type iDashboardWrapperProps = {
  children: ReactNode | Array<ReactNode>;
};

export function DashboardWrapper({ children }: iDashboardWrapperProps) {
  const { user } = useContext(AuthContext);
  const channels = user?.channels;
  const streams: Array<iStream> = [];

  channels?.forEach(({stream_info}: iChannel) => {
    stream_info.forEach((currentStreamInfo: iStream) => {
      if (!streams.includes(currentStreamInfo)) {
        streams.push(currentStreamInfo);
      }
    });
  });

  const actionsRoutes = [
    { id: 'configuracoes', name: 'configurações', redirect: './settings', slim: true },
    { id: 'help', name: 'ajuda', redirect: './help', slim: true },
    { id: 'account', name: 'conta', redirect: './account', slim: true },
  ];

  return (
    <Wrapper>
      <Header.Dashboard user={user} />

      <Wrapper nowrap workarea>
        <Column select='left' workarea>
          {children}
        </Column>

        <Column select='right' workarea>
          <Navigation.Dashboard
            icon={'bi bi-collection-play-fill'}
            title={'Seus canais'}
            options={channels}
            extraButtonIcon={'bi bi-plus'}
            extraButtonContent={'Adicionar canal'}
            extraButtonRedirect={'/dashboard/new-channel'}
          />

          <Navigation.Dashboard
            icon={'bi bi-compass-fill'}
            title={'Streams'}
            options={streams}
            extraButtonIcon={'bi bi-plus'}
            extraButtonContent={'Adicionar stream'}
            extraButtonRedirect={'/dashboard/new-stream'}
          />

          <HorizontalSplit />

          <Navigation.Dashboard
            options={actionsRoutes}
          />
        </Column>
      </Wrapper>
    </Wrapper>
  );
}

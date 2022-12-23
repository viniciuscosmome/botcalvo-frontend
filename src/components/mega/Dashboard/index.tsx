import { useContext, ReactNode } from 'react';

import { AuthContext } from '../../../contexts/auth';
import {
  Wrapper,
  Header,
  Column,
  Navigation,
  HorizontalSplit
} from '../../';

type iDashboardWrapperProps = {
  children: ReactNode | Array<ReactNode>;
};

export function DashboardWrapper({ children }: iDashboardWrapperProps) {
  const { user } = useContext(AuthContext);
  const channels = user?.channels;
  const channelsLimit = user?.channels_limit;

  const actionsRoutes = [
    { id: 'configuracoes', name: 'configurações', redirect: './settings', slim: true },
    { id: 'help', name: 'ajuda', redirect: './help', slim: true },
    { id: 'account', name: 'conta', redirect: './account', slim: true },
  ];

  return (
    <Wrapper>
      <Header.Dashboard />

      <Wrapper nowrap workarea>
        <Column select='left' workarea>
          {children}
        </Column>

        <Column select='right' workarea>
          <Navigation.Dashboard
            icon={'bi bi-collection-play-fill'}
            title={'Seus canais'}
            options={channels}
            showExtraButton={!!channelsLimit}
            extraButtonIcon={'bi bi-plus'}
            extraButtonContent={'Adicionar canal'}
            extraButtonRedirect={'/dashboard/new-channel'}
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

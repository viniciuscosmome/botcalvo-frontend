import type { iNavigationDashboardItemProps } from '../../';
import {
  Wrapper,
  Header,
  Column,
  Navigation,
  HorizontalSplit
} from '../../';

type iDashboardWrapperProps = {
  channels: Array<iNavigationDashboardItemProps>;
  streams: Array<iNavigationDashboardItemProps>;
  children: React.ReactNode | Array<React.ReactNode>;
};

export function DashboardWrapper({ channels, streams, children }: iDashboardWrapperProps) {
  const user = { name: 'Ada Lovelace' };

  const actionsRoutes = [
    { id: 'configuracoes', name: 'configurações', redirect: './settings' },
    { id: 'help', name: 'ajuda', redirect: './help' },
    { id: 'account', name: 'conta', redirect: './account' },
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
            content={channels}
            extraButtonIcon={'bi bi-plus'}
            extraButtonContent={'Adicionar canal'}
            extraButtonRedirect={'/dashboard'}
          />

          <Navigation.Dashboard
            icon={'bi bi-compass-fill'}
            title={'Streams'}
            content={streams}
            extraButtonIcon={'bi bi-plus'}
            extraButtonContent={'Adicionar stream'}
            extraButtonRedirect={'/dashboard'}
          />

          <HorizontalSplit />

          <Navigation.Dashboard
            content={actionsRoutes}
          />
        </Column>
      </Wrapper>
    </Wrapper>
  );
}

import type { iNavigationItemProps } from '../../';
import {
  Wrapper,
  HeaderDashboard,
  ColumnDashboard,
  NavigationSection,
  HorizontalSplit
} from '../../';

type iDashboardWrapperProps = {
  channels: Array<iNavigationItemProps>;
  streams: Array<iNavigationItemProps>;
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
      <HeaderDashboard user={user} />

      <Wrapper nowrap workarea>
        <ColumnDashboard select='left' workarea>
          {children}
        </ColumnDashboard>

        <ColumnDashboard select='right' workarea>
          <NavigationSection
            icon={'bi bi-collection-play-fill'}
            title={'Seus canais'}
            content={channels}
            extraButtonIcon={'bi bi-plus'}
            extraButtonContent={'Adicionar canal'}
            extraButtonRedirect={'/dashboard'}
          />

          <NavigationSection
            icon={'bi bi-compass-fill'}
            title={'Streams'}
            content={streams}
            extraButtonIcon={'bi bi-plus'}
            extraButtonContent={'Adicionar stream'}
            extraButtonRedirect={'/dashboard'}
          />

          <HorizontalSplit />

          <NavigationSection
            content={actionsRoutes}
          />
        </ColumnDashboard>
      </Wrapper>
    </Wrapper>
  );
}

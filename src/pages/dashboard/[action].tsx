import { Wrapper, HeaderDashboard, ColumnDashboard } from '../../components';

export default function Dashboard() {
  const user = {name: 'Ada Lovelace'};

  return (
    <Wrapper>
      <HeaderDashboard user={user} />

      <Wrapper nowrap workarea>
        <ColumnDashboard select='left' workarea>
          Workarea
        </ColumnDashboard>

        <ColumnDashboard select='right' workarea>
          Navigation
        </ColumnDashboard>
      </Wrapper>
    </Wrapper>
  );
}

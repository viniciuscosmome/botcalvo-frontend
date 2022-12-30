import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import variables from '../../config/variables';
import { validateToken } from '../../modules/Validates/geral';
import { DashboardWrapper, ChannelsWrapper, CreateChannel } from '../../components';

export default function Dashboard() {
  const router = useRouter();
  const { action } = router.query;
  const listActions = ['stats', 'new-channel', 'new-stream'];

  const page = (action && typeof action === 'string' && listActions.includes(action)) ? action : listActions[0];

  return (
    <DashboardWrapper>
      {page === listActions[0] && <ChannelsWrapper />}
      {page === listActions[1] && <CreateChannel />}
    </DashboardWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies[variables.cookie.token_name];
  const checkedToken = validateToken(token);

  if (!checkedToken) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      }
    };
  } else {
    return {
      props: {}
    };
  }
};

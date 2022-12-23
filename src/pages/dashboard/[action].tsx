import { GetServerSideProps } from 'next';

import variables from '../../config/variables';
import { validateToken } from '../../modules/Validates/geral';
import { DashboardWrapper, ChannelsWrapper } from '../../components';

export default function Dashboard() {
  return (
    <DashboardWrapper>
      <ChannelsWrapper />
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

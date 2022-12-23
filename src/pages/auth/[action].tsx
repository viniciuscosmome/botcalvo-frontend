import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import variables from '../../config/variables';
import { validateToken } from '../../modules/Validates/geral';
import { AuthenticationWrapper, Login, Logout, Register, Recovery, Reset } from '../../components';

export default function Authentication() {
  const route = useRouter();
  const { action } = route.query;
  const listActions = ['login', 'register', 'recovery', 'reset', 'logout'];

  const page = (action && typeof action === 'string' && listActions.includes(action)) ? action : listActions[0];

  return (
    <AuthenticationWrapper>
      {page === listActions[0] && <Login />}
      {page === listActions[1] && <Register />}
      {page === listActions[2] && <Recovery />}
      {page === listActions[3] && <Reset />}
      {page === listActions[4] && <Logout />}
    </AuthenticationWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const returnProps = {props: {}};

  const action = context.params?.action;
  const isLogoutRoute = (typeof action === 'string') && (action.trim().replace(/[^a-z]/i, '') === 'logout');

  if (isLogoutRoute) return returnProps;

  const token = context.req.cookies[variables.cookie.token_name];
  const checkedToken = validateToken(token);

  if (checkedToken) {
    return {
      redirect: {
        destination: '/dashboard/stats',
        permanent: false,
      }
    };
  }

  return returnProps;
};

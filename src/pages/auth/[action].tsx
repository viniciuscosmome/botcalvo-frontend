import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import variables from '../../config/variables';
import { validateToken } from '../../modules/Validates/geral';
import { AuthenticationWrapper, Login, Register, Recovery, Reset } from '../../components';

export default function Authentication() {
  const route = useRouter();
  const { action } = route.query;
  const listActions = ['login', 'register', 'recovery', 'reset'];

  const page = (action && typeof action === 'string' && listActions.includes(action)) ? action : listActions[0];

  return (
    <AuthenticationWrapper>
      {page === listActions[0] && <Login />}
      {page === listActions[1] && <Register />}
      {page === listActions[2] && <Recovery />}
      {page === listActions[3] && <Reset />}
    </AuthenticationWrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies[variables.cookie.token_name];
  const checkedToken = validateToken(token);

  if (checkedToken) {
    return {
      redirect: {
        destination: '/dashboard/stats',
        permanent: false,
      }
    };
  } else {
    return {
      props: {}
    };
  }
};

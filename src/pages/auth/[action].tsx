import { useRouter } from 'next/router';
import { AuthenticationWrapper, Login, Register, Recovery, Reset } from '../../components';

export default function Authentication() {
  const route = useRouter();
  const { action } = route.query;
  const listActions = ['login', 'register', 'recovery', 'reset'];

  const page = typeof action === 'string' && listActions.includes(action) ? action : listActions[0];

  return (
    <AuthenticationWrapper>
      {page === listActions[0] && <Login />}
      {page === listActions[1] && <Register />}
      {page === listActions[2] && <Recovery />}
      {page === listActions[3] && <Reset />}
    </AuthenticationWrapper>
  );
}

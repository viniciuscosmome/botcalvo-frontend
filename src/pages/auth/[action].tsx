import { useRouter } from 'next/router';
import { AuthenticationWrapper } from '../../components';

export default function Authentication() {
  const route = useRouter();
  const { action } = route.query;
  const listActions = ['login', 'logout', 'register', 'recovery', 'reset'];

  const page = typeof action === 'string' && listActions.includes(action) ? action : listActions[0];

  return (
    <AuthenticationWrapper>
      form {page}
    </AuthenticationWrapper>
  );
}

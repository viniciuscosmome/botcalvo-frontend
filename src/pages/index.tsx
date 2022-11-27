import { useRouter } from 'next/router';
import { HomeWrapper, Inicio } from '../components';

export default function Home() {
  const router = useRouter();
  const {content} = router.query;
  const options = ['home'];

  const page = typeof content === 'string' && options.includes(content) ? content : 'home';

  return (
    <HomeWrapper>
      {page === 'home' && <Inicio />}
    </HomeWrapper>
  );
}

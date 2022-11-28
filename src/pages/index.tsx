import { useRouter } from 'next/router';
import { HomeWrapper, Inicio, LegalPrivacy, LegalUse } from '../components';

export default function Home() {
  const router = useRouter();
  const {content} = router.query;
  const options = ['home', 'legal-privacy', 'legal-use'];

  const page = typeof content === 'string' && options.includes(content) ? content : 'home';

  return (
    <HomeWrapper>
      {page === 'home' && <Inicio />}
      {page === 'legal-privacy' && <LegalPrivacy />}
      {page === 'legal-use' && <LegalUse />}
    </HomeWrapper>
  );
}

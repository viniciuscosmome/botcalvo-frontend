import { Footer, Header, Wrapper } from '../../';

type iHomeProps = {
  children: React.ReactNode | Array<React.ReactNode>;
};

export function HomeWrapper({ children }: iHomeProps) {
  return (
    <Wrapper>
      <Header.Home />

      {children}

      <Footer />
    </Wrapper>
  );
}

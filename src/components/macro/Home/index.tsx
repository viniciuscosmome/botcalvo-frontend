import { Header, Wrapper } from '../../';

type iHomeProps = {
  children: React.ReactNode | Array<React.ReactNode>;
};

export function HomeWrapper({ children }: iHomeProps) {
  return (
    <Wrapper>
      <Header.Home />

      <main>
        {children}
      </main>
    </Wrapper>
  );
}

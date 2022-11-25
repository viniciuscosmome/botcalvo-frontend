import { Wrapper } from '../../';

type iHomeProps = {
  children: React.ReactNode | Array<React.ReactNode>;
};

export function HomeWrapper({ children }: iHomeProps) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

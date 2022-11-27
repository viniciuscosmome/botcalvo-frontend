import { Main, Title, IconHomePlay, IconHomeDashboard, IconHomeNotifications } from '../../';
import styles from './style.module.scss';

type iFloatCardProps = {
  title: string;
  paragraph: string;
  children: React.ReactNode | Array<React.ReactNode>;
}

function FloatCard({ title, paragraph, children }: iFloatCardProps) {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.content}>
          <Title size={'small'}>
            <span className={styles.title}>
              {title}
            </span>
          </Title>

          <p className={styles.paragraph}>
            {paragraph}
          </p>
        </div>

        {children}
      </div>
    </section>
  );
}

export function Inicio() {
  return (
    <Main>
      <FloatCard
        title={'Streams'}
        paragraph={'Little content about strems. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
      >
        <IconHomePlay classes={styles.icon} />
      </FloatCard>

      <FloatCard
        title={'Dashboard'}
        paragraph={'Little content about strems. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
      >
        <IconHomeDashboard classes={styles.icon} />
      </FloatCard>

      <FloatCard
        title={'Notificações'}
        paragraph={'Little content about strems. Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
      >
        <IconHomeNotifications classes={styles.icon} />
      </FloatCard>
    </Main>
  );
}

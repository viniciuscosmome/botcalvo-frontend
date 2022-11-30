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
        paragraph={'Acompanhe seus streamers favoritos.'}
      >
        <IconHomePlay classes={styles.icon} />
      </FloatCard>

      <FloatCard
        title={'Dashboard'}
        paragraph={'Configure o BOTCalvinho no seu servidor no Discord.'}
      >
        <IconHomeDashboard classes={styles.icon} />
      </FloatCard>

      <FloatCard
        title={'Notificações'}
        paragraph={'Receba alerta quando suas lives favoritas estiverem online!'}
      >
        <IconHomeNotifications classes={styles.icon} />
      </FloatCard>
    </Main>
  );
}

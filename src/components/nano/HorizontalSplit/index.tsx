import styles from './style.module.scss';

type iHorizontalSplitProps = {
  content?: string;
};

export function HorizontalSplit({ content }: iHorizontalSplitProps) {
  return (
    <span className={styles.split}>
      <span className={styles.content} data-content={content ?? ''} />
    </span>
  );
}

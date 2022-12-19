import styles from './style.module.scss';

type iFormErrorsProps = {
  messages: Array<string>;
};

export function FormErrors(props: iFormErrorsProps) {
  const renderMessage = (message: string, index: number): JSX.Element => {
    return (
      <div key={index} className={styles.message}>
        <i className={'bi bi-exclamation-triangle-fill'}></i> {message}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {props.messages.map(renderMessage)}
    </div>
  );
}

import styles from './Row.module.css';

export interface IRowProps {
  selected?: boolean;
  disabled?: boolean;
  leading?: React.ReactNode;
  title?: React.ReactNode;
  text?: React.ReactNode;
  trailing?: React.ReactNode;
}

export default function Row(props: IRowProps) {
  const {
    selected, disabled, leading, title, text, trailing,
  } = props;

  return (
    <div
      className={`${styles['ui-row']} ${selected ? styles.selected : ''} ${disabled ? styles.disabled : ''}`}
      data-selected={selected}
      data-disabled={disabled}
    >
      {leading && (
        <div className={styles['ui-row__leading']}>
          {leading}
        </div>
      )}
      <div className={styles['ui-row__label']}>
        <div>
          {title}
        </div>
        {text && (
          <div className={styles['ui-row__sublabel']}>
            {text}
          </div>
        )}
      </div>
      {trailing && (
        <div className={styles['ui-row__trailing']}>
          {trailing}
        </div>
      )}
    </div>
  );
}

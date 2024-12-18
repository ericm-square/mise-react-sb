import styles from './Loader.module.css';

export interface ILoaderProps {
  size?: 'small' | 'medium' | 'large' | 'extra-large';
  contrast?: boolean;
}

export default function Loader(props: ILoaderProps) {
  const { size = 'medium', contrast = false } = props;

  return (
    <div
      className={styles['ui-loader']}
      data-t-size={size}
      data-contrast={contrast ? 'contrast' : undefined}
    >
      <div className={styles['ui-loader__ring']}></div>
      <div className={styles['ui-loader__ring']}></div>
      <div className={styles['ui-loader__ring']}></div>
      <div className={styles['ui-loader__ring']}></div>
    </div>
  );
}

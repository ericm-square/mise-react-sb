import styles from './Progress.module.css';

export interface IProgressProps {
  percentage: number;
  parentModel?: string;
  size?: 'medium' | 'large' | 'extra-large';
  progressClasses?: string;
}

export default function Progress(props: IProgressProps) {
  const {
    percentage, parentModel, size, progressClasses,
  } = props;

  return (
    <progress
      data-x-data={`{ percentage: ${percentage} }`}
      className={`${styles['ui-progress-bar']} ${progressClasses}`}
      data-x-modelable={parentModel ? 'percentage' : undefined}
      data-x-model={parentModel}
      data-class={Number(percentage) === 0 ? styles['ui-progress-bar--empty'] : undefined}
      value={percentage}
      aria-valuemin={0}
      aria-valuenow={percentage}
      aria-valuemax={100}
      max="100"
      data-t-size={size}
    >
    </progress>
  );
}

import styles from './Pill.module.css';

export interface IPillProps {
  label?: string;
  type?: 'info' | 'success' | 'warning' | 'critical' | 'emphasis';
  size?: 'small' | 'normal';
  variant?: 'text' | 'outline' | 'fill';
  shape?: 'squared' | 'rounded';
  uppercase?: boolean;
  interactive?: boolean;
  shouldAnnounce?: boolean;
  pillClasses?: string;
}

export default function Pill(props: IPillProps) {
  const {
    label = 'Pill',
    type = 'default',
    size = 'small',
    variant = 'text',
    shape = 'squared',
    uppercase = false,
    interactive = false,
    shouldAnnounce = false,
    pillClasses = '',
  } = props;

  return (
    <div
      data-t-type={type}
      data-t-size={size}
      data-t-variant={variant}
      data-t-shape={shape}
      className={`${styles['ui-pill']} ${pillClasses}`}
      {...(shouldAnnounce && { 'aria-live': 'polite' })}
      {...(uppercase && { 'data-uppercase': true })}
      {...(interactive && { 'data-interactive': true })}
    >
      {label}
    </div>
  );
}

import styles from './Marquee.module.css';

export interface IMarqueeProps {
  direction: 'left' | 'right';
  content: string;
}

export default function Marquee(props: IMarqueeProps) {
  const { direction, content } = props;

  return (
    <div className={styles['ui-marquee-container']}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`${styles['ui-marquee']} ${styles[`ui-marquee--direction-${direction}`]}`}
          data-text={content}
        >
          <span>{content}</span>
        </div>
      ))}
    </div>
  );
}

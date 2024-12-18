import Icon from '../Icon/Icon';
import styles from './Rating.module.css';

const StarIcon = <Icon name="star" />;
const StarHalfIcon = <Icon name="star_rate_half" />;
const StarEmptyIcon = <Icon name="star_rate_empty" />;

export interface IRatingProps {
  average: number;
  children: React.ReactNode;
}

export default function Rating(props: IRatingProps) {
  const { average, children } = props;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (average >= Math.max(0, i - 0.25)) {
        stars.push(<span key={i} className={styles.uiRatingStar}>{StarIcon}</span>);
      } else if (average > (i - 0.75)) {
        stars.push(<span key={i} className={styles.uiRatingStar}>{StarHalfIcon}</span>);
      } else {
        stars.push(<span key={i} className={styles.uiRatingStar}>{StarEmptyIcon}</span>);
      }
    }
    return stars;
  };

  return (
    <div className={styles.uiRating}>
      <div className={styles.uiRatingAverage}>
        {renderStars()}
      </div>
      <div className={styles.uiRatingContent}>
        {children}
      </div>
    </div>
  );
}

import Loader from '../Loader/Loader';
import Icon, { IconNames } from '../Icon/Icon';
import styles from './Placeholder.module.css';

export interface IPlaceholderProps {
  icon?: IconNames;
  isLoading?: boolean;
}

export default function Placeholder(props: IPlaceholderProps) {
  const {
    icon = 'image', isLoading,
  } = props;

  return (
    <div className={styles['ui-placeholder']}>
      {isLoading
        ? (<div className={styles['ui-placeholder__loader']}>
          <Loader />
        </div>)
        : (
          <div className={styles['ui-placeholder__icon']}>
            <Icon name={icon} />
          </div>
        )
      }
    </div>
  );
}

import { useState } from 'react';
import Icon, { type IconNames } from '../Icon/Icon';
import styles from './Notice.module.css';

export interface INoticeProps {
  id?: string;
  bannerStyle: 'inline' | 'banner';
  linkText?: string;
  linkAction?: () => void;
  secondLinkText?: string;
  secondLinkAction?: () => void;
  title: string;
  message: string;
  variant?: 'info' | 'success' | 'warning' | 'normal' | 'critical';
  linkPosition?: 'top' | 'bottom';
  removeCloseButton?: boolean;
}

export default function Notice(props: INoticeProps) {
  const {
    id,
    bannerStyle = 'banner',
    linkText,
    linkAction,
    secondLinkText,
    secondLinkAction,
    title,
    message,
    variant = 'normal',
    linkPosition,
    removeCloseButton,
  } = props;
  const [isNoticeVisible, setIsNoticeVisible] = useState(true);

  const isBannerStyle = bannerStyle === 'banner';
  const shouldShowTextLink = isBannerStyle && linkText && linkAction;

  let noticeIcon: IconNames = 'add';
  if (variant === 'info') {
    noticeIcon = 'info';
  } else if (variant === 'success') {
    noticeIcon = 'check_circle';
  } else if (variant === 'warning') {
    noticeIcon = 'warning';
  } else if (variant === 'critical') {
    noticeIcon = 'error';
  }

  if (!isNoticeVisible) {
    return null;
  }

  return (
    <div
      id={id}
      role="alert"
      className={styles['ui-notice']}
      data-t-variant={variant}
      data-t-style={bannerStyle}
      >
      <Icon name={noticeIcon} iconClasses={styles['ui-notice__icon']}></Icon>

      <div className={styles['ui-notice__message']}>
        {title && <div className={styles['ui-notice__title']}>{title}</div>}
        {message && <div>{message}</div>}

        {shouldShowTextLink && (linkPosition === 'bottom') && (
          <span
            tabIndex={0}
            role="button"
            className={styles['ui-notice__link']}
            onClick={linkAction}
            onKeyDown={linkAction}
              >
            {linkText}
          </span>
        )}

        {secondLinkText && secondLinkAction && (
          <span
            tabIndex={0}
            role="button"
            className={styles['ui-notice__link']}
            onClick={secondLinkAction}
            onKeyDown={secondLinkAction}
              >
            {secondLinkText}
          </span>
        )}
      </div>

      {shouldShowTextLink && (linkPosition !== 'bottom') && (
        <div className={styles['ui-notice__links-wrapper']}>
          <span
            tabIndex={0}
            role="button"
            className={styles['ui-notice__link']}
            onClick={linkAction}
            onKeyDown={linkAction}
              >
            {linkText}
          </span>
          {secondLinkText && secondLinkAction && (
            <span
              tabIndex={0}
              role="button"
              className={styles['ui-notice__link']}
              onClick={secondLinkAction}
              onKeyDown={secondLinkAction}
                >
              {secondLinkText}
            </span>
          )}
        </div>
      )}

      {isBannerStyle && !removeCloseButton && (
        <div
          className={styles['ui-notice__close']}
          onClick={() => setIsNoticeVisible(false)}
          aria-label="Close"
          role="button"
          tabIndex={0}
          onKeyDown={() => setIsNoticeVisible(false)}
            >
          <Icon iconClasses={`${styles['ui-notice__icon']} ${styles['ui-notice__icon--close']}`} name="close"></Icon>
        </div>
      )}
    </div>
  );
}

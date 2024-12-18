import IconInput from '../../macros/IconInput/IconInput';
import { IconNames } from '../Icon/Icon';
import styles from './Button.module.css';

export interface IButtonProps {
  onClick?: () => void;

  label?: string;
  sublabel?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'subtle' | 'neutral' | 'row';
  style?: 'fill' | 'outline';
  size?: 'compact' | 'small' | 'medium' | 'large';
  align?: 'center' | 'left' | 'right' | 'space-between' | 'flex-end';
  iconPrefix?: IconNames;
  iconPrefixAlt?: string;
  iconPrefixClasses?: string;
  iconSuffix?: string;
  iconSuffixAlt?: string;
  iconSuffixClasses?: string;
  fullWidth?: boolean;
  destructive?: boolean;
  disabled?: boolean;
  contrast?: boolean;
  opaque?: boolean;
  disableHoverStyles?: boolean;
  isDropdown?: boolean;
  disableDropdownToggle?: boolean;
  buttonClasses?: string;
  link?: string;
  action?: string;
  actionOnFocus?: boolean;
  skipActionPrevent?: boolean;
  stopPropagation?: boolean;
  buttonType?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export default function Button(props: IButtonProps) {
  const {
    onClick,
    label,
    sublabel,
    variant = 'primary',
    style = 'fill',
    size = 'medium',
    align = 'center',
    iconPrefix,
    iconPrefixAlt,
    iconPrefixClasses,
    iconSuffix,
    // iconSuffixAlt,
    iconSuffixClasses,
    fullWidth,
    disabled,
    contrast,
    opaque,
    destructive,
    // disableHoverStyles,
    // isDropdown,
    // disableDropdownToggle,
    buttonClasses = '',
    link,
    // action,
    // actionOnFocus,
    // skipActionPrevent,
    // stopPropagation,
    buttonType = 'button',
  } = props;

  const buttonContent = (
    <>
      {iconPrefix && (
        <span className={`${styles['ui-button__icon']} ${styles['ui-button__icon--prefix']} ${iconPrefixClasses}`}>
          <IconInput name={iconPrefix} hiddenLabel={iconPrefixAlt || label} iconClasses={`${styles['ui-button__icon']} ${styles['ui-button__icon--prefix']} ${iconPrefixClasses}`} />
        </span>
      )}
      {label && <span className={styles['ui-button__label']}>{label}</span>}
      {sublabel && <span className={styles['ui-button__sublabel']}>{sublabel}</span>}
      {iconSuffix && (
        <span className={`${styles['ui-button__icon']} ${styles['ui-button__icon--suffix']} ${iconSuffixClasses}`}>
          {iconSuffix}
        </span>
      )}
    </>
  );

  if (link) {
    return (
      <a
        href={link}
        className={`${styles['ui-button']} ${buttonClasses}`}
        data-contrast={contrast}
        data-fullwidth={fullWidth}
        data-opaque={opaque}
        data-disabled={disabled}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      type={buttonType}
      className={`${styles['ui-button']} ${buttonClasses}`}
      data-t-variant={variant}
      data-t-style={style}
      data-t-size={size}
      data-t-align={align}
      data-fullwidth={fullWidth}
      data-opaque={opaque}
      data-destructive={destructive ? 'true' : undefined}
      disabled={disabled}
      data-contrast={contrast}
      // data-disablehoverstyles={disableHoverStyles}
      // data-isdrowdown={isDropdown}
      // data-disabledropdowntoggle={disableDropdownToggle}
      // data-action={action}
      // data-actiononfocus={actionOnFocus}
      // data-skipactionprevent={skipActionPrevent}
      // data-stoppropagation={stopPropagation}

      onClick={onClick}
    >
      {buttonContent}
    </button>
  );
}

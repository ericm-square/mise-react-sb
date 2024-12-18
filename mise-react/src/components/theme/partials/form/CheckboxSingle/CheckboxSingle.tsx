import styles from './CheckboxSingle.module.css';

export interface ICheckboxSingleProps {
  label: string;
  hideLabel?: boolean;
  sublabel?: string;
  value?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  variant?: string;
  size?: string;
  align?: string;
  showDivider?: boolean;
  indeterminate?: boolean;
  isRequired?: boolean;
  CheckboxSingleClasses?: string;

  onChange?: () => void;
}

export default function CheckboxSingle(props: ICheckboxSingleProps) {
  const {
    label,
    // hideLabel,
    sublabel,
    value,
    onChange,
    invalid,
    disabled,
    variant,
    size,
    align,
    showDivider,
    indeterminate,
    isRequired,
    CheckboxSingleClasses,
  } = props;

  const optionId = `checkbox-single-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      data-aria-invalid={invalid}
      className={`${styles['form-element']} ${styles['form-checkbox']} ${styles['form-checkbox--single']} ${CheckboxSingleClasses}`}
      data-class={`{'form-checkbox--invalid': ${invalid}}`}
      data-t-variant={variant || 'normal'}
      data-t-size={size || 'medium'}
      data-t-align={align || 'left'}
      data-divider={showDivider ? 'divider' : undefined}
        >
      <div className={styles['form-checkbox__options']}>
        <label
          htmlFor={optionId}
          className={styles['form-checkbox__option']}
          data-class={`{ 'form-checkbox__option--indeterminate': ${indeterminate}, 'form-checkbox__option--disabled': ${disabled} }`}
                >
          <input
            id={optionId}
            type="checkbox"
            className={styles['form-checkbox__input']}
            checked={value ? value : undefined}
            disabled={disabled}
            data-indeterminate={indeterminate}
            required={isRequired}
            onChange={() => { 
              if (onChange) {
                onChange();
              }
            }}
          />
          <span className={styles['form-checkbox__input-labels']}>
            <span className={styles['form-checkbox__input-label']}>
              {label}
            </span>
            {sublabel && (
            <span className={styles['form-checkbox__input-sublabel']}>
              {sublabel}
            </span>
            )}
          </span>
        </label>
      </div>
    </div>
  );
}

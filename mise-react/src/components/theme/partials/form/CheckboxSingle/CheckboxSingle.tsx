import { useState } from 'react';
import styles from './CheckboxSingle.module.css';

export interface ICheckboxSingleProps {
  label: string;
  hideLabel?: boolean;
  sublabel?: string;
  value?: boolean;
  parentModel?: string;
  invalid?: boolean;
  disabled?: boolean;
  variant?: string;
  size?: string;
  align?: string;
  showDivider?: boolean;
  indeterminate?: boolean;
  isRequired?: boolean;
  CheckboxSingleClasses?: string;
}

export default function CheckboxSingle(props: ICheckboxSingleProps) {
  const {
    label,
    // hideLabel,
    sublabel,
    value,
    parentModel,
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

  const [model, setModel] = useState(false);

  const optionId = `checkbox-single-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      data-x-modelable={parentModel ? 'model' : undefined}
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
            checked={model === value}
            disabled={disabled}
            data-indeterminate={indeterminate}
            required={isRequired}
            onChange={() => setModel(!model)}
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

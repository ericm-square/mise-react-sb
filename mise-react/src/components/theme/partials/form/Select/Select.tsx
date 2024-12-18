// import { useEffect, useState } from 'react';
import styles from './Select.module.css';
import ErrorInput from '../../macros/ErrorInput/ErrorInput';
import Tooltip from '../../ui/Tooltip/Tooltip';
import { IMenuItem } from '../../ui/Menu/Menu';
import Button from '../../ui/Button/Button';
import { useCallback, useRef, useState } from 'react';
import LabelInput from '../../macros/LabelInput/LabelInput';

export interface ISelectOption<T> {
  label: string;
  value: T;
  disabled?: boolean;
}

export interface ISelectProps {
  options: IMenuItem[];
  label?: string;
  sublabel?: string;
  value?: string;
  hint?: string;
  iconPrefix?: string;
  iconSuffix?: string;
  size?: 'small' | 'medium';// TODO: Supposed to have large, but Menu doesn't support it 🤷‍♂️
  isCollapsible?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
  selectClasses?: string;
}

export default function Select(props: ISelectProps) {
  const {
    options,
    label,
    sublabel,
    value,
    hint,
    iconPrefix,
    iconSuffix,
    size = 'medium',
    isCollapsible = false,
    isRequired = false,
    errorMessage,
    selectClasses,
  } = props;

  const labelId = `select-label-${Math.random().toString(36).substr(2, 9)}`;
  const isDisabled = false;
  const isInvalid = false;
  const isLabelLess = false;
  const wrapperRef = useRef(null);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  // const [dropdownModel, setDropdownModel] = useState(value);
  // const [isLoadingDropdown, setIsLoadingDropdown] = useState(false);
  // const [disabledChoices, setDisabledChoices] = useState<any[]>([]);

  const toggleDropdown = useCallback((show?: boolean) => {
    setIsDropdownVisible(show ?? !isDropdownVisible);
    setIsExpanded(show ?? !isExpanded);
  }, [isDropdownVisible, isExpanded]);

  return (
    <div
      id={`${labelId}-wrapper`}
      ref={wrapperRef}
      aria-required={isRequired}
      aria-invalid={isInvalid}
      aria-describedby={isInvalid ? `${labelId} ${labelId}__error` : labelId}
      role="radiogroup"
      className={`${styles['form-element']} ${styles['form-select']} ${selectClasses} ${Boolean(hint) && !value ? styles['form-select--hint-visible'] : ''} ${isInvalid ? styles['form-select--invalid'] : ''}`}
      data-t-size={size || 'defaultSize'}
      data-labelless={isLabelLess ? 'true' : undefined}
      onClick={() => {
        
      }}
    >

      {isCollapsible && 
        <LabelInput
          id={labelId}
          label={label ?? ''}
          hideSublabel={true}
          isCollapsible={true}
        />
      }

      {/* TODO: labelInput */}

      {isExpanded && <div
        x-model="{{ modelName }}"
        className={`${styles["form-select__dropdown-wrapper"]} ${isInvalid ? styles["form-select__dropdown-wrapper--error"] : ''}`}
        id={`${labelId}_panel`}
        aria-labelledby={labelId}
      >
        <Button
          label={isCollapsible ? '' : label}
          sublabel={hint || sublabel}
          iconPrefix={iconPrefix}
          iconSuffix={iconSuffix}
          fullWidth={true}
          isDropdown={true}
          variant="neutral"
          style="outline"
          size={size || 'defaultSize'}
          onClick={() => toggleDropdown()}
          disabled={isDisabled}
        />

        <Tooltip
          id={`${labelId}__dropdown`}
          variant="menu"
          items={options}
          menuTemplateId={`${labelId}__select-tooltip-menu`}
          menuSize={size}
          fullWidth={true}
          show={true}
        >
          <div>
            {/* Your select dropdown or other content here */}
          </div>
        </Tooltip>
      
        {/* Error Message */}
        {!isCollapsible && <ErrorInput message={errorMessage} />}
      </div>}
      
    </div>
  );
}
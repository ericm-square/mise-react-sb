// import { useEffect, useState } from 'react';
import styles from './Select.module.css';
import ErrorInput from '../../macros/ErrorInput/ErrorInput';
import Tooltip from '../../ui/Tooltip/Tooltip';
import { IMenuItem } from '../../ui/Menu/Menu';
import Button from '../../ui/Button/Button';
import { useRef } from 'react';

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
  const isExpanded = true;
  const isLabelLess = false;
  const wrapperRef = useRef(null);

  // const [dropdownModel, setDropdownModel] = useState(value);
  // const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  // const [isLoadingDropdown, setIsLoadingDropdown] = useState(false);
  // const [disabledChoices, setDisabledChoices] = useState<any[]>([]);

  // const toggleDropdown = (show?: boolean) => {
  //   setIsDropdownVisible(show ?? !isDropdownVisible);
  //   // Assuming Theme.UITooltip.toggleTooltip is a function to toggle tooltip
  //   Theme.UITooltip.toggleTooltip(document.querySelector(`#${parentModel}__dropdown`), isDropdownVisible);
  // };

  // const refreshDropdown = async () => {
  //   const dropdownEl = document.querySelector(`#${parentModel}__select-tooltip-menu`);
  //   if (dropdownEl) {
  //     setIsLoadingDropdown(true);

  //     const updatedOptions = options.map((option) => ({
  //       ...option,
  //       disabled: disabledChoices.includes(option.value),
  //     }));

  //     // Assuming Theme.Template.refreshTemplate is a function to refresh template
  //     await Theme.Template.refreshTemplate({
  //       template: 'partials/ui/tooltip-menu',
  //       props: {
  //         items: updatedOptions,
  //         menuTriggerRef: 'selectDropdown',
  //       },
  //       el: dropdownEl,
  //     }).finally(() => {
  //       setIsLoadingDropdown(false);
  //     });
  //   }
  // };

  // return (
  //   <div className={`${styles.select} ${selectClasses}`}>
  //     {label && <label className={styles.label}>{label}</label>}
  //     {sublabel && <span className={styles.sublabel}>{sublabel}</span>}
  //     <div className={styles.selectWrapper}>
  //       {iconPrefix && <span className={styles.iconPrefix}>{iconPrefix}</span>}
  //       <select
  //         className={styles.selectInput}
  //         value={dropdownModel}
  //         onChange={(e) => setDropdownModel(e.target.value)}
  //         required={isRequired}
  //         data-parent-model={parentModel}
  //         data-size={size}
  //         data-is-collapsible={isCollapsible}
  //       >
  //         {options.map((option) => (
  //           <option key={option.value} value={option.value} disabled={option.disabled}>
  //             {option.label}
  //           </option>
  //         ))}
  //       </select>
  //       {iconSuffix && <span className={styles.iconSuffix}>{iconSuffix}</span>}
  //     </div>
  //     {hint && <small className={styles.hint}>{hint}</small>}
  //     {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
  //   </div>
  // );

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
          action="toggleDropdown"
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
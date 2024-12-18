import { useState } from "react";
import ErrorInput from "../ErrorInput/ErrorInput";

export interface ILabelInputProps {
  id: string;
  label: string;
  sublabel?: string;
  hideSublabel?: boolean;
  sublabelHint?: string;
  variant?: 'normal' | 'row';
  isCollapsible?: boolean;
  isRequired?: boolean;
  isOptional?: boolean;
  excludeError?: boolean;
  errorMessage?: string;
}

export default function LabelInput(props: ILabelInputProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    id,
    label,
    sublabel = '',
    hideSublabel = true,
    sublabelHint = '',
    variant = 'normal',
    isCollapsible = false,
    isRequired = false,
    isOptional = true,
    excludeError = false,
    errorMessage = '',
  } = props;
  const isRowVariant = variant === 'row';

  return (
    <div
      className={`
        form-element__label 
        ${isRowVariant ? 'form-element__label--row' : 'form-element__label--truncate'} 
        ${isCollapsible ? 'form-element__label--collapsible' : ''}
        ${isCollapsible && isExpanded ? 'form-element__label--collapsible-expanded' : ''}
      `}
      tabIndex={isCollapsible ? 0 : undefined}
      aria-expanded={isCollapsible ? isExpanded : undefined}
      aria-controls={isCollapsible ? `${id}_panel` : undefined}
      onClick={isCollapsible ? () => setIsExpanded(!isExpanded) : undefined}
      onKeyDown={isCollapsible ? (e) => e.key === 'Enter' && setIsExpanded(!isExpanded) : undefined}
    >
      {isRowVariant ? (
        <span className="form-element__label--primary">
          <span
            id={id}
            aria-describedby={`${id}__sublabel`}
            className="form-element__label--truncate"
          >
            {label}
          </span>
          {(isRequired || isOptional) && (
            <span className="form-element__label--secondary">
              {isRequired ? 'Required' : isOptional ? 'Optional' : ''}
            </span>
          )}
        </span>
      ) : (
        <>
          <span id={id} aria-describedby={`${id}__sublabel`}>{label}</span>
          {!hideSublabel && ':'}
        </>
      )}

      {/* Sublabel */}
      <span id={`${id}__sublabel`} className={`form-element__sublabel ${hideSublabel ? 'visually-hidden' : ''}`}>
        {sublabel || sublabelHint}
      </span>

      {/* Error */}
      {!excludeError && (
        <ErrorInput id={id} label={label} message={errorMessage} />
      )}
    </div>
  );
}

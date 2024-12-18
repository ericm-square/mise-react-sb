import { useEffect, useRef, useState } from 'react';
import Notice from '../../ui/Notice/Notice';
import styles from './TextArea.module.css';

export interface ITextAreaProps {
  parentModel?: string;
  label?: string;
  hint?: string;
  textareaClasses?: string;
  resize?: string;
  name?: string;
  rows?: number;
  max?: number;
  errorMessage?: string;
  disabled?: boolean;
}

export default function TextArea(props: ITextAreaProps) {
  const {
    parentModel = 'model', label, hint, textareaClasses, resize, name, rows = 2, max, errorMessage, disabled = false,
  } = props;
  const [textareaId] = useState(`textarea-${Math.random().toString(36).substr(2, 9)}`);
  const [textareaFormDataId] = useState(`textarea-form-data-${Math.random().toString(36).substr(2, 9)}`);
  const hasLabel = label !== undefined && label !== '';
  const hasHint = hint !== undefined && hint !== '';
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isInvalid] = useState(false);
  const [model, setModel] = useState('');

  useEffect(() => {
    if (isFocused && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isFocused]);

  const focusTextarea = () => setIsFocused(true);
  const blurTextarea = () => setIsFocused(false);

  return (
    <div
      role="textbox"
      tabIndex={0}
      data-x-data={`{ ...textareaForm('${textareaFormDataId}'), }`}
      data-x-init="initTextarea()"
      data-x-effect={'isFocused ? $nextTick(() => textareaRef.current.focus()) : null'}
      data-x-modelable={parentModel}
      aria-invalid={isInvalid}
      aria-describedby={hasLabel ? `${textareaId}__label` : undefined}
      className={`
        ${styles['form-element']} ${styles['form-textarea']} ${textareaClasses} 
        ${!model.length && !hasHint ? styles['form-textarea--empty'] : ''} 
        ${isFocused ? styles['form-textarea--focus'] : ''} 
        ${disabled ? styles['form-textarea--disabled'] : ''} 
        ${isInvalid ? styles['form-textarea--invalid'] : ''}
      `}
      style={resize ? ({ '--ui-textarea-resize-override': resize } as React.CSSProperties) : undefined}
      onClick={focusTextarea}
      onKeyDown={() => {}}
    >
      {hasLabel && (
        <label
          id={`${textareaId}__label`}
          htmlFor={`textarea-${textareaId}`}
          className={styles['form-element__label']}
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        ref={textareaRef}
        data-x-model={parentModel || 'model'}
        name={name || label}
        placeholder={hint || ''}
        rows={rows}
        maxLength={max}
        className={styles['form-textarea__input']}
        disabled={disabled}
        onFocus={focusTextarea}
        onBlur={blurTextarea}
        value={model}
        onChange={e => setModel(e.target.value)}
      ></textarea>
      {max && (
        <div className={styles['form-textarea__text-length']}>
          <span>{model.length}</span> / {max}
        </div>
      )}
      {errorMessage && (
        <div className={styles['form-element__error']}>
          <Notice variant="critical" message={errorMessage} title="" bannerStyle="" />
        </div>
      )}
    </div>
  );
}

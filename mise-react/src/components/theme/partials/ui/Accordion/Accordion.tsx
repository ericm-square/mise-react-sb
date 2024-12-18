import { useState } from 'react';
import { IconNames } from '../Icon/Icon';
import styles from './Accordion.module.css';
import IconInput from '../../macros/IconInput/IconInput';

export interface IAccordionItem {
  icon?: IconNames;
  label: string;
  content: string;
  disabled?: boolean;
}

export interface IAccordionProps {
  accordionItems: IAccordionItem[];
  size?: string;
  allowedTags?: string[];
  expandIcon?: IconNames;
  collapseIcon?: IconNames;
  hideDivider?: boolean;
  accordionClasses?: string;
  richTextFormatting?: boolean;
}

export default function Accordion(props: IAccordionProps) {
  const {
    accordionItems,
    size,
    expandIcon,
    collapseIcon,
    hideDivider,
    accordionClasses,
    richTextFormatting,
  } = props;
  
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div
      className={`${styles['ui-accordion']} ${accordionClasses}`}
      data-t-size={size}
      data-divider={!hideDivider ? 'true' : undefined}
    >
      {accordionItems.map((accordion, accordionIndex) => {
        const accordionId = `accordion-${accordionIndex}`;
        const isExpanded = expandedIndex === accordionIndex;

        return (
          <>
            <button
              key={accordionId}
              aria-expanded={isExpanded}
              aria-controls={`${accordionId}_panel`}
              id={`${accordionId}_trigger`}
              className={`
                ${styles['ui-accordion__trigger']} 
                ${accordion.disabled ? styles['ui-accordion__trigger--disabled'] : ''}
              `}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                (expandedIndex !== accordionIndex)
                  ? setExpandedIndex(accordionIndex)
                  : setExpandedIndex(null);
              }}
            >

              {/* Icon */}
              {accordion.icon && (
                <div className={styles["ui-accordion__trigger-icon ui-accordion__icon"]} aria-hidden="true">
                  <IconInput name={accordion.icon} />
                </div>
              )}

              {/* Label */}
              <div className={styles["ui-accordion__trigger-label"]}>{accordion.label}</div>

              <div className={styles.uiAccordionArrow} aria-hidden="true">
                {expandIcon && collapseIcon ? (
                  <div
                      className={styles["ui-accordion__trigger-arrow"]}
                      aria-hidden="true"
                  >
                    {!isExpanded && <IconInput name={expandIcon} iconClasses={styles['ui-accordion__icon']} />}
                    {isExpanded && <IconInput name={collapseIcon} iconClasses={styles['ui-accordion__icon']} />}
                  </div>
                ) : (
                  <div
                    aria-hidden="true"
                    className={`
                      ${styles["ui-accordion__trigger-arrow"]} 
                      ${isExpanded ? styles["ui-accordion__trigger-arrow--expanded"] : ''}
                    `}
                  >
                    <IconInput name="expand_more" iconClasses={styles["ui-accordion__icon"]} />
                  </div>
                )}
              </div>
            </button>

            {isExpanded && (
              <section
                id={`${accordionId}_panel`}
                aria-labelledby={`${accordionId}_label`}
                className={`
                  ${styles['ui-accordion__panel']} 
                  ${accordion.icon ? styles['ui-accordion__panel--has-icon'] : ''}
                  ${richTextFormatting ? styles['ui-rich-text'] : ''}
                `}
              >
                <div dangerouslySetInnerHTML={{ __html: accordion.content }} />
              </section>
            )}
          </>
        );
      })}
    </div>
  );
}

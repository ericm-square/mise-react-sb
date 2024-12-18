import React, { useCallback, useState } from 'react';
import styles from './Card.module.css';

export interface ICardProps {
  variant?: 'content' | 'action';
  selected?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  cardClasses?: string;
  children?: React.ReactNode;
}

export default function Card(props: ICardProps) {
  const {
    variant = 'content', selected = false, disabled = false, invalid = false, cardClasses = '', children,
  } = props;
  const isActionCard = variant === 'action';
  const [isSelected, setIsSelected] = useState(selected);

  const onClick = useCallback(() => {
    console.log('click');
    if (isActionCard) {
      setIsSelected(!isSelected);
    }
  }, [isActionCard, isSelected]);

  return (
    <div
      role={isActionCard ? 'button' : undefined}
      tabIndex={isActionCard ? 0 : undefined}
      data-t-variant={variant}
      data-selected={isActionCard && isSelected ? isSelected : undefined}
      data-disabled={isActionCard && disabled ? disabled : undefined}
      data-invalid={isActionCard && invalid ? invalid : undefined}
      onClick={onClick}
      onKeyPress={isActionCard
        ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onClick();
          }
        }
        : undefined}
        className={`${styles['ui-card']} ${cardClasses}`}
    >
      {children}
    </div>
  );
}

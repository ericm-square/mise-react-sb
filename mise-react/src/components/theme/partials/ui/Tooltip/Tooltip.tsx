import React from 'react';
import styles from './Tooltip.module.css';
import Menu, { IMenuItem } from '../Menu/Menu';
import TooltipMenu from '../TooltipMenu/TooltipMenu';

export interface ITooltipProps {
  id: string;
  variant?: 'menu' | 'dropdown' | 'normal';
  menuTemplateId?: string;
  menuSize: 'small' | 'medium';
  borderless?: boolean;
  fullWidth?: boolean;
  flush?: boolean;
  tooltipContrast?: boolean;
  tooltipClasses?: string;
  tooltipAttributes?: React.HTMLAttributes<HTMLDivElement>;
  items: IMenuItem[]
  show: boolean;

  children?: React.ReactNode;
}

export default function Tooltip(props: ITooltipProps) {
  const { variant = 'normal' } = props;

  if (variant === 'menu') {
    return <MenuTooltip {...props} />;
  }

  return <NonMenuTooltip {...props} />;
}


function MenuTooltip(props: ITooltipProps) {
  const {
    id,
    menuTemplateId,
    menuSize,
    borderless,
    fullWidth,
    flush,
    tooltipAttributes,
    items,
    show
  } = props;

  const [menuValue] = React.useState<IMenuItem | undefined>(undefined);

  return (
    <div
      id={id || Math.random().toString(36).substr(2, 9)}
      className={styles['ui-tooltip']}
      data-show={show ? 'true' : undefined}
      data-t-variant="menu"
      data-fullwidth={fullWidth ? 'true' : undefined}
      data-borderless={borderless ? 'true' : undefined}
      data-flush={flush ? 'true' : undefined}
      {...tooltipAttributes}
    >
      {menuTemplateId ? (
        <div id={menuTemplateId}>
          <TooltipMenu items={items} menuSize={menuSize} selectedItem={menuValue} />
        </div>
      ) : (
        <Menu items={items} size={menuSize} />
      )}
    </div>
  );
}

function NonMenuTooltip(props: ITooltipProps) {
  const {
    id,
    variant,
    fullWidth,
    tooltipContrast,
    tooltipClasses,
    tooltipAttributes,
    children,
  } = props;

  return (
    <span
      id={id || Math.random().toString(36).substr(2, 9)}
      role="tooltip"
      className={`${styles['ui-tooltip']} ${tooltipClasses}`}
      data-t-variant={variant}
      data-fullwidth={fullWidth ? 'true' : undefined}
      data-contrast={tooltipContrast ? 'true' : undefined}
      {...tooltipAttributes}
    >
      {children}
    </span>
  );
}
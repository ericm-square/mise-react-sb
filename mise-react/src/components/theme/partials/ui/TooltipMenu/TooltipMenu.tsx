import React from 'react';
import Menu, { IMenuItem } from '../Menu/Menu';

export interface ITooltipMenuProps {
  items?: IMenuItem[];
  menuSize: 'small' | 'medium';
  selectedItem?: IMenuItem;
}

export default function TooltipMenu(props: ITooltipMenuProps) {
  const { items = [], menuSize } = props;

  return <Menu
    items={items}
    size={menuSize}
  />;
}
import React, { useCallback, useRef, useState } from 'react';
import styles from './Menu.module.css';

export interface IMenuItem<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
  attributes?: Record<string, string>;
}

export interface IMenuProps<T = string> {
  items: IMenuItem<T>[];
  size?: 'small' | 'medium';
  menuClasses?: string;
}

export default function Menu(props: IMenuProps) {
  const { items, size = 'medium', menuClasses } = props;
  const menuRef = useRef<HTMLUListElement>(null);
  const menuTriggerRef = useRef<HTMLDivElement | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [menuValue, setMenuValue] = useState<string | null>(null);

  const scrollToHoverItem = useCallback((): void => {
    if (menuRef.current && hoverIndex !== null) {
      const hoverItem = menuRef.current.querySelectorAll('li')[hoverIndex - 1];
      if (hoverItem) {
        const hoverItemOffset = hoverItem.offsetTop;
        const menuHeight = menuRef.current.offsetHeight;
        const menuScrollTop = menuRef.current.scrollTop;
        const scrollMax = menuHeight + ((menuHeight - menuScrollTop) % menuHeight);

        if (hoverItemOffset < scrollMax) {
          menuRef.current.scrollTo({
            top: hoverItem.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    }
  }, [hoverIndex]);

  const onMenuItemFocus = useCallback((): void => {
    if (menuTriggerRef.current) {
      if (hoverIndex === 0) {
        setHoverIndex(1);
      }
    }
  }, [hoverIndex]);

  const onMenuItemBlur = useCallback((): void => {
    if (menuTriggerRef.current) {
      setHoverIndex(0);
    } else {
      setHoverIndex(1);
    }
  }, []);

  const onMenuItemClick = useCallback((index: number, value: string): void => {
    setMenuValue(value);
  }, []);

  const onKeyDown = useCallback((): void => {
    if (menuRef.current) {
      const totalItems = menuRef.current.querySelectorAll('li').length;
      if (hoverIndex !== null && hoverIndex < totalItems) {
        setHoverIndex(hoverIndex + 1);
        scrollToHoverItem();
      }
    }
  }, [hoverIndex, scrollToHoverItem]);

  const onKeyUp = useCallback((): void => {
    if (menuRef.current) {
      const totalItems = menuRef.current.querySelectorAll('li').length;
      const minIndex = menuTriggerRef.current ? 0 : 1;
      if (hoverIndex !== null && hoverIndex > minIndex && hoverIndex <= totalItems) {
        setHoverIndex(hoverIndex - 1);
        if (hoverIndex === 0 && menuTriggerRef.current) {
          menuTriggerRef.current.focus();
        }
        if (hoverIndex > 0) {
          scrollToHoverItem();
        }
      }
    }
  }, [hoverIndex, scrollToHoverItem]);

  const onKeyEnter = useCallback((): void => {
    if (hoverIndex !== null) {
      const selectedIndex = hoverIndex - 1;
      onMenuItemClick(hoverIndex, items[selectedIndex]?.value);
    }
  }, [hoverIndex, items, onMenuItemClick]);

  return (
    <div
      ref={menuTriggerRef}
      className={`${styles['ui-menu']} ${menuClasses}`}
      data-t-size={size}
    >
      <div className={`${styles['ui-menu--scrollbar']} ${styles['custom-scrollbar']}`}>
        <ul
          ref={menuRef}
          tabIndex={0}
          aria-label="menu list"
          role="listbox"
          className={`${styles['ui-menu__list']} ${styles['custom-scrollbar-inner']}`}
          onFocus={onMenuItemFocus}
          onBlur={onMenuItemBlur}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              onKeyDown();
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              onKeyUp();
            } else if (e.key === 'Enter') {
              e.preventDefault();
              onKeyEnter();
            }
          }}
        >
          {items.length > 0 &&
            items.map((item, index) => (
              <MenuItem
                key={item.value}
                item={item}
                index={index}
                itemsLength={items.length}
                hoverIndex={hoverIndex}
                menuValue={menuValue}
                onMenuItemClick={onMenuItemClick}
                setHoverIndex={setHoverIndex}
                setMenuValue={setMenuValue}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}

interface IMenuItemProps {
  item: IMenuItem;
  index: number;
  itemsLength: number;
  hoverIndex: number | null;
  menuValue: string | null;
  onMenuItemClick: (index: number, value: string) => void;
  setHoverIndex: (index: number | null) => void;
  setMenuValue: (value: string) => void;
}

function MenuItem(props: IMenuItemProps) {
  const { item, index, itemsLength, hoverIndex, menuValue, onMenuItemClick, setHoverIndex, setMenuValue } = props;

  return (
    <li
      key={item.value}
      role="option"
      tabIndex={-1}
      aria-posinset={index + 1}
      aria-setsize={itemsLength}
      aria-selected={menuValue === item.value}
      className={`${styles['ui-menu__item']} ${hoverIndex === index ? styles['ui-menu__item--hover'] : ''} ${hoverIndex === index + 1 ? styles['ui-menu__item--hide-divider'] : ''} ${menuValue === item.value ? styles['ui-menu__item--active'] : ''} ${item.disabled ? styles['ui-menu__item--disabled'] : ''}`}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
      onClick={() => {
        if (!item.disabled) {
          onMenuItemClick(index, item.value);
          setMenuValue(item.value);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !item.disabled) {
          e.preventDefault();
          onMenuItemClick(index, item.value);
          setMenuValue(item.value);
        }
      }}
    >
      <span className={styles['ui-menu__item-wrapper']} {...item.attributes}>
        {item.label}
      </span>
    </li>
  );
}
export interface IIconProps {
  iconClasses?: string;
}

export default function ExpandLessIcon(props: IIconProps) {
  const { iconClasses } = props;
  return (
    <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 8l-6 6l1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z"/>
    </svg>
  );
}
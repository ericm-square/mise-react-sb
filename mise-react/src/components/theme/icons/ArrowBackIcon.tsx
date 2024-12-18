export interface IIconProps {
  iconClasses?: string;
}

export default function ArrowBackIcon(props: IIconProps) {
  const { iconClasses } = props;
  return (
    <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"/>
    </svg>
  );
}

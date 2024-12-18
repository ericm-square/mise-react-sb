export interface IIconProps {
  iconClasses?: string;
}

export default function NearMeIcon(props: IIconProps) {
  const { iconClasses } = props;
  return (
    <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
      <path d="M516-120 402-402 120-516v-56l720-268-268 720h-56Zm26-148 162-436-436 162 196 78 78 196Zm-78-196Z"/>
    </svg>
  );
}

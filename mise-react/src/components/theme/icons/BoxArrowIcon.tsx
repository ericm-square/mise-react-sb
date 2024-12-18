import { IIconProps } from "../partials/ui/Icon/Icon";

export default function BoxArrowIcon(props: IIconProps) {
  const { iconClasses } = props;
  return (
    <svg className={iconClasses} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 2.5H14.5858L7.29285 9.79297L8.70706 11.2072L15.9971 3.91717V10.5H17.9971V1.5C17.9971 0.947715 17.5494 0.5 16.9971 0.5H8V2.5Z" fill="black" fillOpacity="0.9"/>
      <path d="M2 7.5C2 6.94772 2.44772 6.5 3 6.5H6V4.5H3C1.34315 4.5 0 5.84315 0 7.5V15.5C0 17.1569 1.34315 18.5 3 18.5H11C12.6563 18.5 14 17.1581 14 15.5008V12.5H12V15.5008C12 16.0526 11.5528 16.5 11 16.5H3C2.44772 16.5 2 16.0523 2 15.5V7.5Z" fill="black" fillOpacity="0.9"/>
    </svg>
  );
}

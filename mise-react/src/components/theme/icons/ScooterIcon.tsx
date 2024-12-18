export interface IIconProps {
  iconClasses?: string;
}

export default function ScooterIcon(props: IIconProps) {
  const { iconClasses } = props;
  return (
    <svg className={iconClasses} width="25" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon" clipPath="url(#clip0_14861_110978)">
        <g id="Vector">
          <path d="M19.75 7C19.75 5.9 18.85 5 17.75 5H14.75V7H17.75V9.65L14.27 14H10.75V9H6.75C4.54 9 2.75 10.79 2.75 13V16H4.75C4.75 17.66 6.09 19 7.75 19C9.41 19 10.75 17.66 10.75 16H15.23L19.75 10.35V7ZM4.75 14V13C4.75 11.9 5.65 11 6.75 11H8.75V14H4.75ZM7.75 17C7.2 17 6.75 16.55 6.75 16H8.75C8.75 16.55 8.3 17 7.75 17Z" />
          <path d="M10.75 6H5.75V8H10.75V6Z" />
          <path d="M19.75 13C18.09 13 16.75 14.34 16.75 16C16.75 17.66 18.09 19 19.75 19C21.41 19 22.75 17.66 22.75 16C22.75 14.34 21.41 13 19.75 13ZM19.75 17C19.2 17 18.75 16.55 18.75 16C18.75 15.45 19.2 15 19.75 15C20.3 15 20.75 15.45 20.75 16C20.75 16.55 20.3 17 19.75 17Z" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_14861_110978">
          <rect width="24" height="24" transform="translate(0.75)"/>
        </clipPath>
      </defs>
    </svg>
  );
}

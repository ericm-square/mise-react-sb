import { IIconProps } from "../partials/ui/Icon/Icon";

export default function BoltIcon(props: IIconProps) {
  const { iconClasses } = props;
  return (
    <svg className={iconClasses} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
      <path d="m422-232 207-248H469l29-227-185 267h139l-30 208ZM320-80l40-280H160l360-520h80l-40 320h240L400-80h-80Zm151-390Z"/>
    </svg>
  );
}

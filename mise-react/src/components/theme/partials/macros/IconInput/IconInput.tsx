import Icon, { IconNames } from "../../ui/Icon/Icon";

export interface IIconInputProps {
  name: IconNames;
  color?: string;
  stroke?: string;
  iconClasses?: string;
  ariaHidden?: boolean;
  attributes?: Record<string, unknown>;
  hiddenLabel?: string;
  width?: string;
  height?: string;
}

export default function IconInput(props: IIconInputProps) {
  const {
    name,
    color,
    stroke,
    iconClasses,
    ariaHidden,
    attributes,
    hiddenLabel,
    width = 'var(--material-icon-width, 24px)',
    height = 'var(--material-icon-height, 24px)',
  } = props;

  return (
    <>
      <span
        className={`material-icon-svg ${iconClasses}`}
        {...(attributes ? { ...attributes } : {})}
        aria-hidden={ariaHidden ? 'true' : undefined}
        style={{
          '--override-material-icon-width': width,
          '--override-material-icon-height': height,
          '--override-material-icon-fill': color || 'var(--material-icon-fill, currentColor)',
          '--override-material-icon-stroke': stroke || 'var(--material-icon-stroke)',
        }}
      >
        <Icon name={name} />
      </span>
      {hiddenLabel && <span className="visually-hidden">{hiddenLabel}</span>}
    </>
  );
}

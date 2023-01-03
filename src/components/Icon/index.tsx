interface Props {
  name:
    | 'buy-a-house'
    | 'chevron-left'
    | 'chevron-right'
    | 'dollar-sign'
    | 'logo-origin';
  title?: string;
  width?: string;
  height?: string;
}

export function Icon({ name, title = '', width, height }: Props) {
  const src = require(`../../assets/icons/${name}.svg`);
  return (
    <img
      aria-hidden={!!title}
      src={src}
      alt={title}
      width={width}
      height={height}
    />
  );
}

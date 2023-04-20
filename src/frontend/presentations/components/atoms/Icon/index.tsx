import { memo, Suspense } from 'react';
import { IconProps, ICONS } from './types';
import { getColor, getSize } from './utils';

const Icon: React.FC<IconProps> = ({
  name,
  color,
  size,
  className,
  style,
  onClick
}) => {

  const IconSvg = ICONS[name as keyof typeof ICONS];
  const { width, height } = getSize(size);

  if (!IconSvg) return null;

  return (
    <Suspense fallback={<div>Loading</div>}>
      <IconSvg
        fill={getColor(color)}
        width={width}
        height={height}
        className={className}
        style={style}
        onClick={onClick}
      />
    </Suspense>
  )
}

export default memo(Icon);
import { memo, useMemo } from 'react';
import { IconButtonProps } from './types';
import { Wrapper, IconBtn } from './styled';
import { getIconSize } from './utils';


const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size,
  color,
  variant,
  rounded,
  onClick
}) => {
  const iconSize = useMemo(() => getIconSize(size), [size]);

  return (
    <Wrapper onClick={onClick} rounded={rounded} size={size} color={color} variant={variant}>
      <IconBtn name={icon} size={iconSize} />
    </Wrapper>
  )
}

export default memo(IconButton);
import { memo } from 'react';
import type { ContainerProps } from './types';
import { Wrapper } from './styled';
// main component
const Container: React.FC<ContainerProps> = ({
  id,
  className,
  style,
  children,
  fullWidth
}) => {
  return (
    <Wrapper
      id={id}
      className={className}
      style={style}
      fullWidth={fullWidth}
    >
      {children}
    </Wrapper>
  )
}

export default memo(Container);
import { memo } from 'react';
import { NativeLink } from './styled';
import { LinkProps } from './types';


const Link: React.FC<LinkProps> = ({
  href,
  color,
  title,
  style,
  scroll,
  shallow,
  replace,
  children,
  prefetch,
  passHref,
  className,
  legacyBehavior,
  onClick,
}) => {
  return (
    <NativeLink
      href={href}
      color={color}
      title={title}
      style={style}
      scroll={scroll}
      replace={replace}
      shallow={shallow}
      prefetch={prefetch}
      passHref={passHref}
      className={className}
      legacyBehavior={legacyBehavior}
      onClick={onClick}
    >
      {children}
    </NativeLink>
  )
};

export default memo(Link);
import { memo } from 'react';
import styled from 'styled-components';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { AppColorEnum } from '@styles/colors';
import { ColorType, UrlType } from '@general-types';

export interface LinkProps extends NextLinkProps {
  children?: React.ReactNode | React.ReactElement | JSX.Element | null;
  color?: ColorType;
  style?: React.CSSProperties;
  className?: string;
  href: UrlType;
  title?: string;
}

const getColors: (color: ColorType) => string = (color = 'dark') => {
  return `color: ${AppColorEnum[color]};`;
}

const getLinkStyle: () => string = () => {
  return `
    transition: .1s linear;
    text-decoration: none;

    &:hover {
      color: ${AppColorEnum.primary};
    }
  `;
}

const NativeLink = styled(NextLink) <Pick<LinkProps, 'color'>>`
  ${(props) => getColors(props.color || 'dark')}
  ${getLinkStyle()}
`;

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
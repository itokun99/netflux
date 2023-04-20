import { memo } from 'react';
import styled from 'styled-components';
import AppLink from '@components/atoms/Link';
import { UrlType } from '@general-types';
import { FontSizeEnum } from '@styles/fonts';
import { AppSpacingEnum } from '@styles/matrix';
import { AppColorEnum } from '@styles/colors';

// type definitions
export interface MenuItemProps {
  href: UrlType,
  children?: React.ReactNode,
  title?: string,
  className?: string,
  style?: React.CSSProperties
}

// styled definitions
const Wrapper = styled.li`
  display: inline-block;
  margin-right: ${AppSpacingEnum.m}px;
`;
const Link = styled(AppLink)`
  font-size: ${FontSizeEnum.s}px;
  font-weight: 500;
  color: ${AppColorEnum.dark};
  line-height: 18px;
`;


// main component
const MenuItem: React.FC<MenuItemProps> = ({
  href,
  children,
  title,
  className,
  style
}) => {
  return (
    <Wrapper className={className} style={style}>
      <Link href={href} title={title}>{children}</Link>
    </Wrapper>
  )
}

export default memo(MenuItem);
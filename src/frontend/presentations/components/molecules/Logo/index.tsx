import { memo } from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import Text from '@components/atoms/Text';
import { ColorType } from '@general-types';
import { FontFamilyEnum, FontSizeEnum } from '@styles/fonts';


export interface LogoProps {
  color?: ColorType,
  className?: string,
  style?: React.CSSProperties
}

const Wrapper = styled.div``;

const LogoText = styled(Text)`
  font-family: ${FontFamilyEnum.logo};
  font-size: ${FontSizeEnum.xxl}px;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
`;

const Link = styled(NextLink)`
  text-decoration: none;
`;

const Logo: React.FC<LogoProps> = ({ color, className, style }) => {
  return (
    <Wrapper className={className} style={style}>
      <Link href="/">
        <LogoText element='h2' color={color}>NETFLUX</LogoText>
      </Link>
    </Wrapper>
  )
}

export default memo(Logo);
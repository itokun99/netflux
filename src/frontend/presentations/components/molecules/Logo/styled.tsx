import NextLink from 'next/link';
import styled from 'styled-components';
import { FontFamilyEnum, FontSizeEnum } from '@styles/fonts';
import Text from '@components/atoms/Text';


export const Wrapper = styled.div``;

export const LogoText = styled(Text)`
  font-family: ${FontFamilyEnum.logo};
  font-size: ${FontSizeEnum.xxl}px;
  line-height: 32px;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
`;

export const Link = styled(NextLink)`
  text-decoration: none;
`;
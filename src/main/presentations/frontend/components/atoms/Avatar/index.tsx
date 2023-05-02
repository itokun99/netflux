import { memo } from 'react';
import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import type { FC } from 'react';
import Text from '@components/atoms/Text';

export interface AvatarProps {
  variant: 'text' | 'image',
  rounded?: boolean;
  clickable?: 'none' | 'button' | 'link' | 'preview',
  value?: string;
  size?: number;
}

const baseStyle = css`
  background-color: red;
`;

const sizeStyle = css<Pick<AvatarProps, 'size' | 'rounded'>>(({ size, rounded }) => {
  return css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${rounded ? `${size}px` : 0};
  `
});

const NoneWrapper = styled.div<Pick<AvatarProps, 'size'>>`
  ${baseStyle}
  ${sizeStyle}
`;
const ButtonWrapper = styled.button``;
const LinkWrapper = styled(NextLink)``;
const Letter = styled(Text)``;


const Avatar: FC<AvatarProps> = ({
  variant = 'text',
  rounded = false,
  clickable = 'none',
  value = '',
  size = 16
}) => {

  const parseNameToInitial = (nameStr: string) => {
    const nameArr = nameStr.split(' ');

    if (nameArr.length >= 2) {
      return `${nameArr[0][0]}${nameArr[1][0]}`
    }

    return nameStr[0];
  }

  const textValue = parseNameToInitial(value);

  const renderContent = () => {
    return (
      <Letter>{textValue}</Letter>
    )
  }

  return (
    <NoneWrapper size={size}>
      {renderContent()}
    </NoneWrapper>
  )
}

export default memo(Avatar);
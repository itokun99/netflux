import NextLink from 'next/link';
import styled, { css } from 'styled-components';
import type { LinkProps } from './types';
import { AppColorEnum } from '@styles/colors';
import { ColorType } from '@frontend/types/common';


const getColors = (color = 'dark') => {
  return css`color: ${AppColorEnum[color as keyof typeof AppColorEnum]};`;
}

const getLinkStyle = () => {
  return css`
    transition: .1s linear;
    text-decoration: none;

    &:hover {
      color: ${AppColorEnum.primary};
    }
  `;
}

export const NativeLink = styled(NextLink) <Pick<LinkProps, 'color'>>`
  ${(props) => getColors(props.color || 'dark')}
  ${getLinkStyle()}
`;
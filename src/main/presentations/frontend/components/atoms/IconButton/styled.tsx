import styled, { css } from 'styled-components';
import { AppSpacingEnum } from '@styles/matrix';
import { AppColorEnum } from '@styles/colors';
import Icon from '@components/atoms/Icon';
import { IconButtonProps } from './types';

const baseStyle = css<Pick<IconButtonProps, 'size'>>`
  background-color: transparent;
  border: 2px solid transparent;
  padding: ${AppSpacingEnum.xs}px;
  border-radius: 6px;
  outline: none;
  transition: .2s ease-in-out;
  display: inline-block;
  position: relative;
  cursor: pointer;
  
  &:active {
    scale: 1.05;
  }

  > svg {
    vertical-align: middle;
  }
`;

const colorStyle = css<Pick<IconButtonProps, 'color' | 'variant'>>(({ color, variant }) => {

  if (variant === 'contained' && color && AppColorEnum[color]) {
    const baseColor = AppColorEnum[color];
    return css`
      background-color: ${baseColor};
      border-color: ${baseColor};
      
      > svg {
        fill: ${['primary', 'success', 'error', 'dark'].includes(color || '') ? AppColorEnum.light : AppColorEnum.dark}
      }

      &:active, &:focus, &:hover {
        outline: none;
        box-shadow: 0 0 5px 1px ${baseColor};
      }
    `;
  }

  if (variant === 'outlined' && color && AppColorEnum[color]) {
    const baseColor = AppColorEnum[color];
    return css`
      background-color: transparent;
      border-color: ${baseColor};
      > svg {
        fill: ${baseColor};
      }
      
      &:active, &:focus, &:hover {
        outline: none;
        box-shadow: 0 0 5px 0px ${baseColor};
        background-color: ${baseColor};

        > svg {
          fill: ${['primary', 'success', 'error', 'dark'].includes(color || '') ? AppColorEnum.light : AppColorEnum.dark};
        }
      } 
    `;
  }

  return '';
})

export const IconBtn = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;

const sizeStyle = css<Pick<IconButtonProps, 'size'>>(({ size }) => {
  switch (size) {
    case 'small':
      return css`width: 32px; height: 32px;`
    case 'large':
      return css`width: 54px; height: 54px`
    default:
      return css`width: 48px; height: 48px;`
  }
})

export const Wrapper = styled.button<Pick<IconButtonProps, 'color' | 'variant' | 'size' | 'rounded'>>`
  ${baseStyle}
  ${colorStyle}
  ${sizeStyle}
`;
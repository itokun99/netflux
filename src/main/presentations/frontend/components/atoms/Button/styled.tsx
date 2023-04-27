import Icon from '@components/atoms/Icon';
import Text from '@components/atoms/Text';
import Loader from '@components/atoms/Loader';
import styled, { css } from 'styled-components';
import { FontSizeEnum } from '@styles/fonts';
import { AppSpacingEnum } from '@styles/matrix';
import { AppColorEnum } from '@styles/colors';
import { ButtonProps } from './types';

const buttonBaseStyle = css<Pick<ButtonProps, 'block'>>`
  font-size: ${FontSizeEnum.m}px;
  line-height: ${AppSpacingEnum.xl}px;
  padding-top: ${AppSpacingEnum.xs}px;
  padding-bottom: ${AppSpacingEnum.xs}px;
  padding-left: ${AppSpacingEnum.l}px;
  padding-right: ${AppSpacingEnum.l}px;
  border: 2px solid ${AppColorEnum.dark};
  border-radius: 6px;
  outline: none;
  transition: .2s ease-in-out;
  display: ${(props) => props.block ? 'block; width: 100%;' : 'inline-block'};
  font-weight: 500;
  cursor: pointer;

  > svg, > span {
    transition: .2s ease-in-out;
  }

  &:active {
    scale: 1.05;
  }
`;

const buttonColorStyle = css<Pick<ButtonProps, 'color' | 'variant'>>(({ color, variant }) => {
  if (variant === 'contained') {
    const baseColor = AppColorEnum[color as keyof typeof AppColorEnum];

    return css`
      background-color: ${baseColor};
      border-color: ${baseColor};
      color: ${['primary', 'success', 'error', 'dark'].includes(color || '') ? AppColorEnum.light : AppColorEnum.dark};
      box-shadow: 0 0 0px 0px ${baseColor};
      &:active, &:focus, &:hover {
        outline: none;
        box-shadow: 0 0 5px 1px ${baseColor};
      }
    `;
  }

  if (variant === 'outlined') {
    const baseColor = AppColorEnum[color as keyof typeof AppColorEnum];

    return css`
      background-color: transparent;
      border-color: ${baseColor};
      color: ${baseColor};
      border-width: 2px;
      box-shadow: 0 0 0px 0px ${baseColor};

      &:active, &:focus, &:hover {
        color: ${['primary', 'success', 'error', 'dark'].includes(color || '') ? AppColorEnum.light : AppColorEnum.dark};
        outline: none;
        box-shadow: 0 0 5px 0px ${baseColor};
        background-color: ${baseColor};;
      }
    `;
  }
})

const buttonSizeStyle = css<Pick<ButtonProps, 'size'>>(({ size }) => {
  if (size === 'small') {
    return css`
      padding-top: ${AppSpacingEnum.xxs + 2}px;
      padding-bottom: ${AppSpacingEnum.xxs + 2}px;
      padding-left: ${AppSpacingEnum.m}px;
      padding-right: ${AppSpacingEnum.m}px;
      font-size: ${FontSizeEnum.s}px;
      line-height: ${AppSpacingEnum.m}px;

      > svg {
        width: 16px;
        height: 16px;
      }

      > span {
        line-height: 16px;
      }
    `
  }

  if (size === 'large') {
    return css`
      padding-top: ${AppSpacingEnum.xs}px;
      padding-bottom: ${AppSpacingEnum.xs}px;
      padding-left: ${AppSpacingEnum.xl}px;
      padding-right: ${AppSpacingEnum.xl}px;
      font-size: ${FontSizeEnum.l}px;
      line-height: ${AppSpacingEnum.xl}px;

      > svg {
        width: 32px;
        height: 32px;
      }
    `
  }
});

const btnIconStyle = css<Pick<ButtonProps, 'icon' | 'variant' | 'color'>>(({ icon, variant, color }) => {
  if (!icon || !variant || variant !== 'outlined') {
    return ``;
  }

  return css`
    &:hover > span, &:focus > span {
      color: ${['primary', 'success', 'error', 'dark'].includes(color || '') ? AppColorEnum.light : AppColorEnum.dark};
    }

    &:hover > svg, &:focus > svg {
      fill: ${['primary', 'success', 'error', 'dark'].includes(color || '') ? AppColorEnum.light : AppColorEnum.dark};
    }
  `
})

export const btnDisabledStyle = css<Pick<ButtonProps, 'disabled' | 'color'>>(props => {

  if (!props.disabled) return '';

  return css`
    background-color: ${AppColorEnum.bgDisabled};
    border-color: ${AppColorEnum.bgDisabled};
    cursor: not-allowed;
    &:active, &:focus, &:hover {
      outline: none;
      box-shadow: 0 0 5px 0px ${AppColorEnum.bgDisabled};
      background-color: ${AppColorEnum.bgDisabled};
    }

    &:active {
      scale: none;
    }
  `
});

export const Btn = styled.button<Pick<ButtonProps & { $loading?: boolean }, 'color' | 'variant' | 'size' | 'icon' | 'block' | '$loading'>>`
  ${buttonBaseStyle}
  ${buttonColorStyle}
  ${buttonSizeStyle}
  ${btnIconStyle}
  ${btnDisabledStyle}
`;

export const BtnIcon = styled(Icon)`
  display: inline-block;
  vertical-align: middle;
  margin-right: ${AppSpacingEnum.xs}px;
`;
export const TextContent = styled(Text)`
  line-height: ${AppSpacingEnum.xl}px;
  display: inline-block;
  vertical-align: middle;
  transition: .2s ease-in-out;
`;

export const BtnLoader = styled(Loader)`
  margin-right: ${AppSpacingEnum.xs}px;
  display: inline-block;
  vertical-align: middle;
`;

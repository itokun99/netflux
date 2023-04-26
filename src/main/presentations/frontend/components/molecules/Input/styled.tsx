import styled, { css } from 'styled-components';
import Icon from '@components/atoms/Icon';
import { IconProps } from '@components/atoms/Icon/types';
import Text from '@components/atoms/Text';
import { AppColorEnum, getRgbaColor } from '@styles/colors';
import { AppSpacingEnum } from '@styles/matrix';
import { FontSizeEnum } from '@styles/fonts';

import { InputProps } from './types';


// styled definitions
export const Wrapper = styled.div`
  position: relative;
  margin-bottom: ${AppSpacingEnum.m}px;
`;
export const FieldWrapper = styled.div`
  position: relative;
`;
export const Label = styled(Text).attrs({
  element: 'label'
}) <Pick<InputProps & { htmlSize?: 'small' | 'default' | 'large' }, 'htmlSize'>>`
  display: inline-block;
  margin-bottom: ${AppSpacingEnum.xxs + 2}px;
  font-size: ${FontSizeEnum.s}px;
  line-height: ${AppSpacingEnum.l - 2}px;

  ${props => {
    if (props.htmlSize === 'small') {
      return `
        font-size: ${FontSizeEnum.xs}px;
        line-height: ${AppSpacingEnum.l}px;
      `
    }

    if (props.htmlSize === 'large') {
      return `
        font-size: ${FontSizeEnum.m}px;
        line-height: ${AppSpacingEnum.xl}px;
      `
    }
  }}
`;
export const Message = styled(Text)`
  font-size: ${FontSizeEnum.xxs}px;
  margin: 0;
  line-height: ${AppSpacingEnum.m}px;
  display: block;
  padding-top: ${AppSpacingEnum.xxs - 2}px;
`;

const fieldSmallStyle = css<Pick<InputProps & { iconAlign?: 'start' | 'end', htmlSize?: 'small' | 'default' | 'large' }, 'error' | 'iconAlign' | 'icon' | 'htmlSize'>>`
  font-size: ${FontSizeEnum.s}px;
  line-height: ${AppSpacingEnum.m}px;
  padding-left: ${AppSpacingEnum.s}px;
  padding-right: ${AppSpacingEnum.s}px;
  padding-top: ${AppSpacingEnum.xxs + 2}px;
  padding-bottom: ${AppSpacingEnum.xxs + 2}px;
  height: 32px;
`;

const fieldLargeStyle = css<Pick<InputProps & { iconAlign?: 'start' | 'end', htmlSize?: 'small' | 'default' | 'large' }, 'error' | 'iconAlign' | 'icon' | 'htmlSize'>>`
  font-size: ${FontSizeEnum.l}px;
  line-height: ${AppSpacingEnum.xl}px;
  padding-left: ${AppSpacingEnum.m}px;
  padding-right: ${AppSpacingEnum.m}px;
  padding-top: ${AppSpacingEnum.xs}px;
  padding-bottom: ${AppSpacingEnum.xs}px;
`;

const fieldBaseStyle = css<Pick<InputProps & { iconAlign?: 'start' | 'end', htmlSize?: 'small' | 'default' | 'large' }, 'error' | 'iconAlign' | 'icon' | 'htmlSize'>>`
  border-radius: 6px;
  border: none;
  outline: none;
  width: 100%;
  font-size: ${FontSizeEnum.m}px;
  line-height: ${AppSpacingEnum.xl}px;
  padding-left: ${AppSpacingEnum.s}px;
  padding-right: ${AppSpacingEnum.s}px;
  padding-top: ${AppSpacingEnum.xs}px;
  padding-bottom: ${AppSpacingEnum.xs}px;
  margin-bottom: 0;
  transition: .2s ease-in-out;
  box-sizing: border-box;
  box-shadow: 0 0px 0 1px ${AppColorEnum.inputBorder};
  
  ${({ error }) => error ? `border-color:${AppColorEnum.error};` : ''}
  
  &:focus {
    box-shadow: 0 0px 0 1px ${getRgbaColor('primary', 0.3)};
  }

  ${props => {
    if (props.htmlSize === 'small') {
      return fieldSmallStyle;
    }

    if (props.htmlSize === 'large') {
      return fieldLargeStyle;
    }

    return ''
  }}

  ${props => {
    let pSize = 24;

    switch (props.htmlSize) {
      case 'small':
        pSize = 16;
        break;
      case 'large':
        pSize = 32;
        break;
      default:
        break;
    }

    if (props.icon && props.iconAlign && props.iconAlign === 'start') {
      return `padding-left: calc(${AppSpacingEnum.s}px + 24px + ${AppSpacingEnum.xs}px);`
    }

    if (props.icon) {
      return `padding-right: calc(${AppSpacingEnum.s}px + 24px + ${AppSpacingEnum.xs}px);`
    }
  }}
`

export const NativeInput = styled.input<Pick<InputProps & { iconAlign?: 'start' | 'end', htmlSize?: 'small' | 'default' | 'large' }, 'error' | 'iconAlign' | 'htmlSize' | 'icon'>>`
  ${fieldBaseStyle}
`;
export const NativeTextArea = styled.textarea<Pick<InputProps & { iconAlign?: 'start' | 'end', htmlSize?: 'small' | 'default' | 'large' }, 'error' | 'iconAlign' | 'htmlSize'>>`
  ${fieldBaseStyle}
`;

const passwordIconStyle = css<Pick<IconProps & { isPassword: boolean }, 'isPassword'>>`
  cursor: ${props => props.isPassword ? 'pointer' : 'default'};
`;

export const InputIcon = styled(Icon) <Pick<IconProps & { isPassword: boolean; iconAlign?: 'start' | 'end' }, 'isPassword' | 'iconAlign'>>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => {
    if (props.iconAlign === 'start') {
      return `
        margin-left: ${AppSpacingEnum.s}px;
        left: 0;
      `
    }

    return `
      margin-right: ${AppSpacingEnum.s}px;
      right: 0;
    `
  }}
  ${passwordIconStyle}
`;
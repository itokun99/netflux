import { memo } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { AppColorEnum } from '@styles/colors';
import { AppSpacingEnum } from '@styles/matrix';
import { ColorType } from '@general-types';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Wrapper = styled.div<Pick<LoaderProps & { width: number, height: number }, 'color' | 'width' | 'height'>>(props => {

  const color = getColor(props.color)
  const borderSize = props.width * 0.15;

  return css`
    border: ${borderSize}px solid #f3f3f3;
    border-radius: 50%;
    border-top: ${borderSize}px solid ${color};
    border-bottom: ${borderSize}px solid ${color};
    width: ${props.width}px;
    height: ${props.height}px;
    animation: ${spin} 1s linear infinite;
    display: inline-block;
    vertical-align: middle;
  `
});

export const getColor = (color?: ColorType) => {
  if (!color) return AppColorEnum.dark;
  return AppColorEnum[color as keyof typeof AppColorEnum];
}

export const getSize = (size: number | keyof typeof AppSpacingEnum) => {
  if (typeof size === 'number') {
    return { width: size, height: size }
  }

  if (AppSpacingEnum[size as keyof typeof AppSpacingEnum]) {
    return {
      width: AppSpacingEnum[size as keyof typeof AppSpacingEnum],
      height: AppSpacingEnum[size as keyof typeof AppSpacingEnum]
    }
  }
  return { width: AppSpacingEnum.m, height: AppSpacingEnum.m };
}


export interface LoaderProps {
  color?: ColorType;
  className?: string;
  style?: React.CSSProperties;
  size?: number;
}

const Loader: React.FC<LoaderProps> = ({
  style,
  className,
  color,
  size
}) => {

  const { width, height } = getSize(size || 16);

  return (
    <Wrapper
      color={color}
      className={className}
      width={width}
      height={height}
      style={style}
    />
  )
}

export default memo(Loader)
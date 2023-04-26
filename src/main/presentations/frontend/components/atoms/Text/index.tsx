import { memo } from 'react';
import styled, { css } from 'styled-components';
import { AppColorEnum } from '@styles/colors';
import { ColorType } from '@general-types';

export type TextElementType = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';


export interface TextProps {
  children?: React.ReactNode | React.ReactElement | JSX.Element | null;
  element?: TextElementType;
  color?: ColorType;
  style?: React.CSSProperties;
  className?: string;
  htmlFor?: string;
}

const getColors: (color: ColorType) => string = (color = 'dark') => {
  return `color: ${AppColorEnum[color]};`;
}

const baseStyle = css`
  margin: 0;
`;

const getTextStyle = (props: Pick<TextProps, 'color'>) => {
  return `
    ${baseStyle}
    ${getColors(props.color || 'dark')}
  `;
}

const P = styled.p<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;
const Span = styled.span<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;
const H1 = styled.h1<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;
const H2 = styled.h2<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;
const H3 = styled.h3<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;
const H4 = styled.h4<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;
const H5 = styled.h5<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;
const H6 = styled.h6<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;
const Label = styled.label<Pick<TextProps, 'color'>>`${(props) => getTextStyle(props)}`;

const Text: React.FC<TextProps> = ({
  children,
  element = 'p',
  color,
  style,
  className,
  htmlFor
}) => {
  // const El: React.ElementType = getElement(element);

  const _attrs = { color, style, className }

  switch (element) {
    case 'span':
      return <Span {..._attrs} >{children}</Span>;
    case 'h1':
      return <H1 {..._attrs}>{children}</H1>;
    case 'h2':
      return <H2 {..._attrs}>{children}</H2>;
    case 'h3':
      return <H3 {..._attrs}>{children}</H3>;
    case 'h4':
      return <H4 {..._attrs}>{children}</H4>;
    case 'h5':
      return <H5 {..._attrs}>{children}</H5>;
    case 'h6':
      return <H6 {..._attrs}>{children}</H6>;
    case 'label':
      return <Label {..._attrs} htmlFor={htmlFor}>{children}</Label>;
    default:
      return <P {..._attrs}>{children}</P>;
  }
};

export default memo(Text);
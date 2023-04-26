import { memo } from 'react';
import styled from 'styled-components';
import { AppSpacingEnum, AppContainerEnum } from '@styles/matrix';

// type definitions
export interface ContainerProps {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  fullWidth?: boolean;
  nopadding?: boolean;
}

// styled definitions
const Wrapper = styled.div<Pick<ContainerProps, 'fullWidth' | 'nopadding'>>`
  max-width: ${({ fullWidth }) => fullWidth ? '100%' : `${AppContainerEnum.desktop}px`};
  margin-left: auto;
  margin-right: auto;
  padding-left: ${AppSpacingEnum.xl}px;
  padding-right: ${AppSpacingEnum.xl}px;
  
  @media screen and (max-width: ${AppContainerEnum.phonePotrait}px) {
    padding-left: ${AppSpacingEnum.m}px;
    padding-right: ${AppSpacingEnum.m}px;
  }
  ${({ nopadding }) => {
    if (nopadding) return `
      padding-left: 0;
      padding-right: 0;
    `;

    return '';
  }}
`;


// main component
const Container: React.FC<ContainerProps> = ({
  id,
  className,
  style,
  children,
  fullWidth
}) => {
  return (
    <Wrapper
      id={id}
      className={className}
      style={style}
      fullWidth={fullWidth}
    >
      {children}
    </Wrapper>
  )
}

export default memo(Container);
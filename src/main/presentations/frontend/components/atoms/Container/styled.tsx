import styled, { css } from 'styled-components';
import { AppSpacingEnum, AppContainerEnum } from '@styles/matrix';
import type { ContainerProps } from './types';

// styled definitions
export const Wrapper = styled.div<Pick<ContainerProps, 'fullWidth' | 'nopadding'>>`
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
    if (nopadding) return css`
      padding-left: 0;
      padding-right: 0;
    `;

    return '';
  }}
`;
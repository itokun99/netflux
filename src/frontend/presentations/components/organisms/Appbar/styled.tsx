import styled from 'styled-components';
import Logo from '@components/molecules/Logo';
import ContainerView from '@components/atoms/Container';
import Input from '@components/molecules/Input';
import { AppColorEnum, getRgbaColor } from '@styles/colors';
import { AppContainerEnum, AppSpacingEnum } from '@styles/matrix';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${AppColorEnum.light};
  box-shadow: 0 4px 25px ${getRgbaColor('dark', 0.1)};
  z-index: 1;
`

export const Container = styled(ContainerView)`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  height: 64px;
  align-items: center;
  justify-content: space-between;
`

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;
export const RightSection = styled.div`
  display: flex;
  transition: .2s ease-in-out;
  justify-content: end;
  padding-left: ${AppSpacingEnum.xl}px;

  @media screen and (max-width: ${AppContainerEnum.tablet}px) {
    padding: 0;
    width: 100%;
  }
`;


export const AppLogo = styled(Logo)`
  margin-right: ${AppSpacingEnum.m}px;
`;

export const SearchBarForm = styled.form`
  max-width: 300px;
  transition: .2s ease-in-out;
  @media screen and (max-width: ${AppContainerEnum.phoneLandscape}px) {
    max-width: 100%;
    width: 100%;
  }
`;
export const ActionButtonWrapper = styled.div`
  padding-left: ${AppSpacingEnum.m}px;
`;

export const SearchBar = styled(Input)`
  margin-bottom: 0;
`;
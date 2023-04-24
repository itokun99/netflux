import styled from 'styled-components';
import { getRgbaColor, AppColorEnum } from '@styles/colors';
import { AppSpacingEnum } from '@styles/matrix';
import { FontSizeEnum } from '@styles/fonts';
import AppMenu from '@components/organisms/AppMenu';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 375px;
  background-color: ${AppColorEnum.light};
  z-index: 1;
  transition: .2s ease-in-out;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 25px ${getRgbaColor('dark', 0.1)};
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: ${getRgbaColor('dark', 0.8)};
  z-index: 1;
  transition: .2s ease-in-out;
  cursor: pointer;
`;
export const TopSection = styled.div`
  padding-top: ${AppSpacingEnum.m}px;
  padding-bottom: ${AppSpacingEnum.m}px;
  padding-left: ${AppSpacingEnum.m}px;
  padding-right: ${AppSpacingEnum.m}px;
  border-bottom: 1px solid ${getRgbaColor('dark', 0.2)};
`;
export const MiddleSection = styled.div`
  flex: 1;
  border-bottom: 1px solid ${getRgbaColor('dark', 0.2)};
`;
export const BottomSection = styled.div`
  padding: ${AppSpacingEnum.m}px;
`;

export const Menu = styled(AppMenu)`
  > li {
    display: block;
    border-bottom: 1px solid ${getRgbaColor('dark', 0.2)};
    margin-right: 0;

    a {
      font-size: ${FontSizeEnum.m}px;
      line-height: ${AppSpacingEnum.xl}px;
      display: inline-block;
      width: 100%;
      padding: ${AppSpacingEnum.m}px;
    }
  }
`;
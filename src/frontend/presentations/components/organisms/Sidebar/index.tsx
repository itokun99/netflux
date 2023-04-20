import { memo } from 'react';
import styled from 'styled-components';
import IconButton from '@components/atoms/IconButton';
import Text from '@components/atoms/Text';
import { getRgbaColor } from '@styles/colors';
import { AppSpacingEnum } from '@styles/matrix';
import AppMenu from '../AppMenu';
import MenuItem from '../AppMenu/_components/MenuItem';
import { MenuItemInterface } from '@general-types';
import { FontSizeEnum } from '@styles/fonts';

export interface SidebarProps {
  menus: MenuItemInterface[];
  onClose: () => void;
  show: boolean;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 375px;
  background-color: white;
  z-index: 1;
  transition: .2s ease-in-out;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 25px ${getRgbaColor('dark', 0.1)};
`;

const Backdrop = styled.div`
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
const TopSection = styled.div`
  padding-top: ${AppSpacingEnum.m}px;
  padding-bottom: ${AppSpacingEnum.m}px;
  padding-left: ${AppSpacingEnum.m}px;
  padding-right: ${AppSpacingEnum.m}px;
  border-bottom: 1px solid ${getRgbaColor('dark', 0.2)};
`;
const MiddleSection = styled.div`
  flex: 1;
  border-bottom: 1px solid ${getRgbaColor('dark', 0.2)};
`;
const BottomSection = styled.div`
  padding: ${AppSpacingEnum.m}px;
`;

const Menu = styled(AppMenu)`
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

const Sidebar: React.FC<SidebarProps> = ({
  menus,
  show,
  onClose
}) => {
  if (!show) return null

  return (
    <>
      <Backdrop onClick={onClose} />
      <Wrapper>
        <TopSection>
          <IconButton
            icon='ic-close'
            size='small'
            variant='outlined'
            color='primary'
            onClick={onClose}
          />
        </TopSection>
        <MiddleSection>
          <Menu items={menus} />
        </MiddleSection>
        <BottomSection>
          <Text color="dark" element="p">Netflux | Movie for Freedom @ 2023</Text>
        </BottomSection>
      </Wrapper>
    </>
  )
}

export default memo(Sidebar);
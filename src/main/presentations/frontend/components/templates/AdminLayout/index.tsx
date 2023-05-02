import { memo, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Appbar from '@components/organisms/Appbar';
import { AppSpacingEnum } from '@styles/matrix';
import Sidebar from '@components/organisms/Sidebar';
import { ADMIN_MENUS } from '@configs/menu';
import { User } from '@entities/user';

const Wrapper = styled.div`
  margin-top: ${AppSpacingEnum.appbar}px;
  margin-left: 300px;
  padding-top: ${AppSpacingEnum.xxl}px;
  padding-left: ${AppSpacingEnum.xl}px;
  padding-right: ${AppSpacingEnum.xl}px;
  height: calc(100vh - ${AppSpacingEnum.appbar}px);
`;


interface AdminLayoutProps {
  children?: ReactNode
  user?: User
}
const AdminLayout: FC<AdminLayoutProps> = ({
  children,
  user
}) => {

  const menus = useMemo(() => ADMIN_MENUS, []);

  console.log("data user", user);

  return (
    <>
      <Appbar fullContainer user={user} />
      <Sidebar
        show
        menus={menus}
        variant='stayed'
        position='left'
        showBottomSection={false}
        showTopSection={false}
      />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  )
}

export default memo(AdminLayout);
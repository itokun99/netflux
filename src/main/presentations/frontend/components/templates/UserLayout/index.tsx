import Appbar from '@components/organisms/Appbar';
import styled from 'styled-components';
import { AppSpacingEnum } from '@styles/matrix';

// type definitions
export interface UserLayoutProps {
  children?: React.ReactNode,
  appbar?: boolean
}

// styled definitions
const ContentWrapper = styled.main<Pick<UserLayoutProps, 'appbar'>>`
  margin-top: ${(props) => props.appbar ? `${AppSpacingEnum.appbar}px` : 'none'};
`;

const UserLayout: React.FC<UserLayoutProps> = ({
  children,
  appbar = true
}) => {
  return (
    <>
      {appbar && <Appbar showMenu showLogo showActionButton showSearchbar />}
      <ContentWrapper appbar={appbar}>
        {children}
      </ContentWrapper>
    </>
  )
}

export default UserLayout;
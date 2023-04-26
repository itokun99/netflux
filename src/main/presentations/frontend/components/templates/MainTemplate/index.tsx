import Appbar from '@components/organisms/Appbar';
import styled from 'styled-components';
import { AppSpacingEnum } from '@styles/matrix';

// type definitions
export interface MainTemplateProps {
  children?: React.ReactNode,
  appbar?: boolean
}

// styled definitions
const ContentWrapper = styled.main<Pick<MainTemplateProps, 'appbar'>>`
  margin-top: ${(props) => props.appbar ? `${AppSpacingEnum.appbar}px` : 'none'};
`;

const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
  appbar = true
}) => {
  return (
    <>
      {appbar && <Appbar />}
      <ContentWrapper appbar={appbar}>
        {children}
      </ContentWrapper>
    </>
  )
}

export default MainTemplate;
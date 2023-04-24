import styled from 'styled-components';
import Button from '@components/atoms/Button';
import Logo from '@components/molecules/Logo';
import Loader from '@components/atoms/Loader';
import Text from '@components/atoms/Text';
import Container from '@components/atoms/Container';
import { AppContainerEnum } from '@styles/matrix';
import { FontSizeEnum } from '@styles/fonts';


const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  max-width: ${AppContainerEnum.phonePotrait}px;
  height: 100%;
  min-height: 100vh;
`;

const ContentWrapper = styled(Container)`
  padding-top: 48px;
  padding-bottom: 48px;
`;

const TopSection = styled.div`
  padding-bottom: 32px;
`;
const MiddleSection = styled.div``;
const BottomSection = styled.div``;
const Headline = styled(Text)`
  font-size: ${FontSizeEnum.l}px;
  font-weight: 500;
  text-align: center;
`


const Login = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TopSection>
          <Logo color="primary" size={100} />
          <Headline color="dark">Admin Portal</Headline>
        </TopSection>
        <MiddleSection>
          <Button
            color='primary'
            variant='contained'
            block
            icon="ic-google"
            loading={false}
          >
            Masuk dengan Google
          </Button>
        </MiddleSection>
        <BottomSection></BottomSection>
      </ContentWrapper>
    </Wrapper>
  )
}

export default Login;
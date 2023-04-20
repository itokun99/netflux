import { memo } from 'react';
import Button from '@components/atoms/Button';
import useWindowSize from '@hooks/useWindowSize';
import { BigBannerProps } from './types';
import {
  Wrapper,
  ActionButtonContainer,
  BannerContainer,
  BgOverlay,
  ContentWrapper,
  Description,
  Headline,
  Image,
  InfoContainer
} from './styled';
import { AppContainerEnum } from '@styles/matrix';



const BigBanner: React.FC<BigBannerProps> = ({
  headline,
  description
}) => {

  const { windowSize } = useWindowSize();
  const btnSize = windowSize.width && windowSize.width > AppContainerEnum.phoneLandscape ? 'default' : 'small';

  return (
    <Wrapper>
      <Image
        src="/assets/images/example-banner.png"
        alt="example-image"
        fill
      />
      <BgOverlay />
      <ContentWrapper>
        <BannerContainer>
          <InfoContainer>
            <Headline color="light" element='h2'>{headline}</Headline>
            <Description color="light">{description}</Description>
            <ActionButtonContainer>
              <Button
                size={btnSize}
                icon="ic-play"
                color='primary'
              >
                Nonton Sekarang
              </Button>
              <Button
                size={btnSize}
                icon="ic-info-circle"
                color='light'
                variant='outlined'
              >
                Detail
              </Button>
            </ActionButtonContainer>
          </InfoContainer>
        </BannerContainer>
      </ContentWrapper>
    </Wrapper>
  )
}

export default memo(BigBanner);